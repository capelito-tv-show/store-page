import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";

import OriginalBlend from '../components/OriginalBlend';
import Blend from '../components/Blend';
import Manual from "../components/Manual";
import Standard from '../components/StandardCoffee';

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
  },
  manual: {
    marginTop: "0",
  },
});

class CoffeeList extends Component {
  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.menu}>
        <div className={classes.menuContents}>
          <Grid container>
            <Grid item xs={12} md={7}>
              <OriginalBlend />
              <Blend />
              <Standard />
            </Grid>
            <Grid item xs={12} md={5} className={classes.manual}>
              <Manual />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CoffeeList);
