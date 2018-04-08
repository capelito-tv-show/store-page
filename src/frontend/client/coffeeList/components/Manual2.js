import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";

import step1 from "../../shared/images/step1.jpg";
import step2 from "../../shared/images/step2.jpg";
import step3 from "../../shared/images/step3.jpg";
import step4 from "../../shared/images/step4.jpg";


const styles = theme => ({
  img: {
    maxWidth: "100%",
    maxHeight: "130px",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "80px",      
    }
  }
});

class Manual extends Component {
  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.menu}>
        <div className={classes.menuContents}>
          <Grid container>
            <Grid item xs={12} md={3}>
              <img  src={step1} className={classes.img} />
            </Grid>
            <Grid item xs={12} md={3}>
              <img  src={step2} className={classes.img} />
            </Grid>
            <Grid item xs={12} md={3}>
              <img  src={step3} className={classes.img} />
            </Grid>
            <Grid item xs={12} md={3}>
              <img  src={step4} className={classes.img} />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Manual);
