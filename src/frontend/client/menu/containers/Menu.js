import React, { Component } from "react";

import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";

import MenuCard from "../components/menuCard";
import Tea from "../components/tea";
import Premium from '../components/Premium';
import MenuImage from "../components/menuImage";

const styles = theme => ({
  menu: {
    margin: "auto",
  },
  menuContents: {
    margin: "0 auto",
    padding: "30px 100px",
    [theme.breakpoints.down("md")]: {
      margin: "0",
      padding: "10px"
    }
  }
});

class Menu extends Component {
  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.menu}>
        <div className={classes.menuContents}>
          <Grid container>
            <Grid item xs={12} md={7}>
              <MenuCard />
              <Tea />
              <Premium />
            </Grid>
            <Grid item xs={12} md={5}>
              <MenuImage />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Menu);
