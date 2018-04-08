import React, { Component } from "react";
import { compose, withState, withHandlers,lifecycle } from "recompose";
import { withStyles } from "material-ui/styles";
import { firebaseDb } from "../../../shared/Firebase";
import MenuItem from '../components/MenuItem';

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
  title: {
    minWidth: "180px",
    display: "inline-block",
    [theme.breakpoints.down("md")]: {
      margin: "0"
    }
  },
  price: {
    fontWeight: "bold"
  },
  detail: {
    paddingBottom: "5px"
  }
});

const Enhance = lifecycle({
  componentDidMount() {
    const blendRef = firebaseDb.ref("menus/blend");
    let _this = this;

    const menusRef = blendRef.on("value", function(snapshot) {
      const menus = snapshot.val();
      _this.setState({
        menus: menus
      });
    });
  }
})

export default Enhance(withStyles(styles)(MenuItem));
