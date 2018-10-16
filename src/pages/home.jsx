import * as React from "react";
import Button from "@material-ui/core/Button";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <p>Home</p>
        <Button variant="contained" color="primary">
          home
        </Button>
      </div>
    );
  }
}

export default HomePage;
