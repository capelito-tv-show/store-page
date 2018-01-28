import React, { Component } from "react";
import * as firebase from "firebase";
import { firebaseConfig } from "../../../shared/Firebase/config";
import { firebaseDb } from "../../../shared/Firebase";

import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";

const styles = theme => ({
  menu: {
    marginLeft: "120px",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      margin: "0"
    }
  }
});

class MenuCard extends Component {
  constructor() {
    super();
    this.state = {
      menus: []
    };
  }

  componentWillMount() {
    const blendRef = firebaseDb.ref("menus/blend");
    let _this = this;

    const menusRef = blendRef.on("value", function(snapshot) {
      const m = snapshot.val();
      _this.setState({
        menus: m
      });
    });
  }

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.menu}>
        <Grid container className={MenuCard}>
          <Grid item xs={12}>
            <Grid container>
              {this.state.menus.map(menu => (
                <Grid item xs={12} md={6} lg={6} xl={6} key={menu.key}>
                  <Paper>
                    <h4>{menu.title}</h4>
                    <p>{menu.price}</p>
                    <p>{menu.detail}</p>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(MenuCard);
