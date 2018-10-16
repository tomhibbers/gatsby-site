import React from "react";
import { graphql } from "gatsby";
import Layout from "../containers/Layout/Layout";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { withStyles } from "@material-ui/core/styles";
import { navigate } from "gatsby";
import Img from "gatsby-image";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
const styles = {
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  cardLinks: {
    display: "flex",
    alignItems: "center"
    // paddingLeft: theme.spacing.unit,
    // paddingBottom: theme.spacing.unit
  },
  blogPosts: {
    textAlign: "center"
  },
  media: {
    height: 150,
    width: 150
  }
};
class BlogPage extends React.Component {
  render() {
    const { classes } = this.props;
    const { edges: posts } = this.props.data.allMarkdownRemark;

    return (
      <div>
        <Layout>
          <div className={classes.blogPosts}>
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => {
                return (
                  <div className="blog-post-preview" key={post.id}>
                    <Card className={classes.card}>
                      <div className={classes.cover}>
                        <Img
                          className={classes.media}
                          sizes={post.frontmatter.cover.childImageSharp.sizes}
                        />
                      </div>
                      <CardHeader
                        title={post.frontmatter.title}
                        subheader={post.frontmatter.date}
                      />
                      <CardContent className={classes.content}>
                        <Typography component="p">{post.excerpt}</Typography>
                      </CardContent>
                      <div className={classes.cardLinks}>
                        <CardActions>
                          <IconButton aria-label="Share">
                            <ShareIcon />
                          </IconButton>
                          <IconButton
                            aria-label="Share"
                            size="small"
                            onClick={() => navigate(post.frontmatter.path)}
                          >
                            <ChevronRightIcon />
                          </IconButton>
                        </CardActions>
                      </div>
                    </Card>
                  </div>
                );
              })}
          </div>
        </Layout>
      </div>
    );
  }
}
export default withStyles(styles)(BlogPage);

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            cover {
              childImageSharp {
                sizes(maxWidth: 150, maxHeight: 150) {
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
`;
