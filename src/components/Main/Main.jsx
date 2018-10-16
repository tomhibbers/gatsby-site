import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import { createContext } from "react";
export const LayoutContext = createContext();
const styles = theme => ({});
class Main extends React.Component {
  render() {
    const children = this.props.children;
    return <main>{children}</main>;
  }
}

export default withStyles(styles)(Main);
