import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from 'material-ui/Toolbar';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { withStyles } from "material-ui/styles";
import HeaderDrawer from "./Drawer";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  }
});

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <AppBar position="static">
            <Toolbar>
              <HeaderDrawer />
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
