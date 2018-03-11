import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import Button from "material-ui/Button";

import { HeaderList } from "../components/HeaderList";

const styles = {
  list: {
    width: "250"
  },
  listFull: {
    width: "auto"
  }
};

class HeaderDrawer extends Component {
  state = { left: false };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div classes={classes.Header}>
        <Button onClick={this.toggleDrawer("left", true)}>メニューを開く</Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer("left", false)} >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            <HeaderList classes={classes.list} />
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(HeaderDrawer);
