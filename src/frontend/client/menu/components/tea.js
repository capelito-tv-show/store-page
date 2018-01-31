import React, { Component } from "react";
import { firebaseDb } from "../../../shared/Firebase";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";

const styles = theme => ({
  menuList: {
    paddingBottom: "0",
  },
  title: {
    minWidth: "180px",
    display: "inline-block",
    [theme.breakpoints.down("md")]: {
      margin: "0"
    }
  },
  price: {
    fontWeight: "bold",
  }
});


class Tea extends Component {
  constructor() {
    super();
    this.state = {teas: []};
  }

  componentWillMount() {
    const tea = firebaseDb.ref("menus/straightRef");
    let _this = this;

    const menusRef = tea.on("value", function(snapshot) {
      const m = snapshot.val();
      _this.setState({
        teas: m
      });
    });
  }

  render() {
    const classes = this.props.classes;
    return (
      <div>
        <Grid container className={Tea}>
          <Grid item xs={12}>
            <Grid container>
              {this.state.teas.map(menu => (
                <Grid item xs={12} md={12} lg={6} xl={6} key={menu.key}>
                  <Paper>
                    <div className={menu.category}>
                      <ul className="MenuDetail">
                        <li className={classes.menuList}>
                          <span className={classes.title}>{menu.title}</span>
                          <span className={classes.price}>{menu.price}</span>
                        </li>
                        <li><span className={classes.detail}>{menu.detail}</span></li>
                      </ul>
                    </div>
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

export default withStyles(styles)(Tea);
