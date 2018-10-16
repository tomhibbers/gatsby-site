import * as React from "react";
import Header from "../../components/Header/Header";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#2196f3",
      main: "#2196f3",
      dark: "#002884",
      contrastText: "#fff"
    },
    secondary: {
      light: "#00e676",
      main: "#00e676",
      dark: "#ba000d",
      contrastText: "#000"
    }
  }
});
const styles = theme => ({});
class LayoutContainer extends React.Component {
  render() {
    const children = this.props.children;

    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Header />
          {children}
        </MuiThemeProvider>
      </div>
    );
  }
}
export default withStyles(styles)(LayoutContainer);

// import React from "react";

// export default ({ children }) => <div>{children}</div>;
