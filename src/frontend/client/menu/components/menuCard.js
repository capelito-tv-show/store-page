import React, { Component } from "react";
import { firebaseDb } from "../../../shared/Firebase";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";

const styles = theme => ({
  categoryTitle: {
    width: "100%",
    marginRight: "20px",
    background: "rgb(92,29,7)"
  },
  mainTitle: {
    paddingLeft: "18px",
    color: "white",
    textAlign: "left",
    fontWeight: "50"
  },
  menuPaper: {
    boxShadow: "none"
  },
  menuList: {
    paddingBottom: "5px"
  },
  menuCard: {
    padding: "0 ",
  },
  table: {
    display: "flex",
  },
  title: {
    fontWeight: "bold",
    display: "inline-block",
    margin: "0"
    // [theme.breakpoints.down("md")]: {
    //   margin: "0"
    // }
  },
  price: {
    margin: "0",
    marginLeft: "auto",
  },
  detail: {
    paddingBottom: "5px",
    margin: "0",
    fontSize: "11px"
    // borderBottom: "1px solid #D0D0D0"
  }
});

class MenuCard extends Component {
  constructor() {
    super();
    this.state = { menus: [] };
  }

  componentWillMount() {
    const blendRef = firebaseDb.ref("menus/Blend");
    let _this = this;

    const menusRef = blendRef.on("value", function(snapshot) {
      const menus = snapshot.val();
      _this.setState({
        menus: menus
      });
    });
  }

  render() {
    const classes = this.props.classes;
    const menus = this.state.menus;
    const menu = Object.keys(menus).map(key => {
      return (
        <Grid item xs={6} md={6} lg={6} xl={6} key={key}>
          <Paper className={classes.menuPaper}>
            <div className={menus[key].category}>
              <ul className={classes.menuCard}>
                <li className={classes.menuList}>
                  <div className={classes.table}>
                    <p className={classes.title}>{menus[key].title}</p>
                    <p className={classes.price}>{menus[key].price}円</p>
                  </div>
                  <p className={classes.detail}>{menus[key].detail}</p>
                </li>
              </ul>
            </div>
          </Paper>
        </Grid>
      );
    });
    return (
      <div>
        <Grid container className={MenuCard}>
          <div className={classes.categoryTitle}>
            <h4 className={classes.mainTitle}>ブレンド珈琲</h4>
          </div>
          <Grid item xs={12}>
            <Grid container>{menu}</Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(MenuCard);
