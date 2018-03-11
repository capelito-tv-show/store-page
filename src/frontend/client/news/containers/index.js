import React, { Component } from "react";

import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";

import NewsContent from "../Enhance/withStyle";

class Menu extends Component {
  render() {
    return (
      <div className="">
        <Grid container>
          <Grid item xs={12} md={7}>
            <NewsContent />
          </Grid>
          <Grid item xs={12} md={5}>
            <h2>なにか</h2>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Menu;
