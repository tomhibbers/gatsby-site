// const path = require("path");
// exports.createPages = ({ boundActionCreators, graphql }) => {
//   const { createPage } = boundActionCreators;

//   return new Promise((resolve, reject) => {
//     const postTemplate = path.resolve(`src/templates/BlogPostTemplate.jsx`);

//     resolve(
//       graphql(`
//         {
//           allMarkdownRemark(
//             sort: { order: DESC, fields: [frontmatter___date] }
//             limit: 1000
//           ) {
//             edges {
//               node {
//                 frontmatter {
//                   path
//                   slug
//                   draft
//                 }
//               }
//             }
//           }
//       `).then(result => {
//         if (result.errors) {
//           console.log(result.errors);
//           reject(result.errors);
//         }

//         result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//           if (!node.frontmatter.draft) {
//             createPage({
//               path: node.frontmatter.path,
//               component: postTemplate,
//               context: {
//                 slug: node.frontmatter.slug
//               }
//             });
//           }
//         });
//       })
//     );
//   });
// };

const path = require("path");
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/BlogPostTemplate.jsx`);
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              cover {
                childImageSharp {
                  sizes(maxWidth: 400, maxHeight: 250) {
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {} // additional data can be passed via context
      });
    });
  });
};
