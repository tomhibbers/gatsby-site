import * as React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import "./Layout.scss";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
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
class Layout extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="app">
          <Header />
          <Main children={this.props.children} />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default withStyles(styles)(Layout);
