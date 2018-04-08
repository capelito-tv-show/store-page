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
    padding: "0 "
  },
  table: {
    display: "flex"
  },
  title: {
    fontWeight: "bold",
    minWidth: "180px",
    display: "inline-block",
    margin: "0"
    // [theme.breakpoints.down("md")]: {
    //   margin: "0"
    // }
  },
  price: {
    margin: "0",
    marginLeft: "auto"
  },
  detail: {
    paddingBottom: "5px",
    margin: "0",
    fontSize: "11px"
    // borderBottom: "1px solid #D0D0D0"
  }
});

class Premium extends Component {
  constructor() {
    super();
    this.state = { teas: [] };
  }

  componentWillMount() {
    const tea = firebaseDb.ref("menus/Straight");
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
        <Grid container className={Premium}>
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
                        <li>
                          <span className={classes.detail}>{menu.detail}</span>
                        </li>
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

export default withStyles(styles)(Premium);
