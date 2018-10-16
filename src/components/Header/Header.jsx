import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import imgSrc from "../../opm-logo.png";

import { navigate } from "gatsby";
import IconButton from "@material-ui/core/IconButton";
import GithubIcon from "../Icons/GithubIcon/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon/LinkedinIcon";
import TwitterIcon from "../Icons/TwitterIcon/TwitterIcon";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  socialLinks: {
    textAlign: "center"
  },
  nav: {
    textAlign: "center"
  },
  avatar: {
    width: 100,
    height: 100,
    borderWidth: "5px",
    borderStyle: "solid",
    borderRadius: "50%",
    borderColor: theme.palette.background.default,
    margin: "0 auto 15px auto"
  }
});
class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <header>
        <Avatar
          src={imgSrc}
          className={classes.avatar}
          onClick={() => navigate(`/`)}
        />
        <div className={classes.socialLinks}>
          <IconButton
            color="primary"
            onClick={() => navigate(`/test`)}
            className={classes.button}
            aria-label="Github"
          >
            <GithubIcon fontSize="small" />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => navigate(`/test`)}
            className={classes.button}
            aria-label="Twitter"
          >
            <TwitterIcon fontSize="small" />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => navigate(`/test`)}
            className={classes.button}
            aria-label="Linkedin"
          >
            <LinkedinIcon fontSize="small" />
          </IconButton>
        </div>
        <div className={classes.nav}>
          <Button
            color="primary"
            className={classes.button}
            onClick={() => navigate(`/about`)}
          >
            About
          </Button>
          <Button
            color="primary"
            className={classes.button}
            onClick={() => navigate(`/blog`)}
          >
            Blog
          </Button>
          <Button
            color="primary"
            className={classes.button}
            onClick={() => navigate(`/contact`)}
          >
            Contact
          </Button>
        </div>
      </header>
    );
  }
}

export default withStyles(styles)(Header);
