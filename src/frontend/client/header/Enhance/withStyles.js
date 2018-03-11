import React from "react";
import { withStyles } from "material-ui/styles";
import Header from '../Header';


const styles = theme => ({
  header: {
    display: "block",
    [theme.breakpoints.down('sm')]: {
    }
  },
  h1:{
  [theme.breakpoints.down('sm')]: {
    margin: "30px 0 30px 2%",
    width: "18%",
    textAlign: "center",
    float: "left"
  },
  [theme.breakpoints.down('xs')]: {
    margin: "15px 0",
  },
  } ,
  global: {
    backgroundColor: "rgba(92,29,7,0.5)",
    width: "130px",
    height: "100%",
    position: "fixed",
    zIndex: "100",
    top: 0,
    left: 0,
    minHeight: "450px",
    [theme.breakpoints.down('sm')]: {
      overflow: "hidden",
      width: "auto",
      height: "auto",
      backgroundPosition: "top",
      backgroundSize: "100%",
      position: "relative",
      padding: 0,
      zIndex: 1010,
      minHeight: 0,
    },
  },
  megaNav: {
    [theme.breakpoints.down('sm')]: {
      float: "left",
      width: "75%",
      [theme.breakpoints.down('xs')]: {
        paddingLeft: "20px"
      }
    },
  },
  ul: {
    margin: 0,
    listStyle: "none",
    padding: "15px 0",
    textAlign: "left",
    display: "table",
    [theme.breakpoints.down('sm')]: {
      textAlign: "left",
      margin: 0,
      padding: "15px 0",
      width: "100%",
    },
    [theme.breakpoints.down('xs')]: {
      padding: "0"
    },
  },
  li: {
    padding: "20px 10px",
    display: "block",
    padding: "20px 0 20px 25px",
    fontSize: "13px",
    [theme.breakpoints.down('sm')]: {
      float: "left",
      // fontSize: "11",
      cursor: "pointer",
      verticalAlign: "middle",
      display: "table-cell",
      padding: "20px 25px 0",
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: "10px",
      padding: "15px 8px",

    },

  },
  link: {
    color: "white",
    fontSize: "111%",
    textDecoration: "none",
    [theme.breakpoints.down('sm')]: {

    },
  },
  logo: {
    width: "86px",
    position: "relative",
    top: "0",
    display: "block",
    paddingLeft: "25px",
    [theme.breakpoints.down('sm')]: {
      margin: "auto",
      top: "0",
      display: "block",
      position: "relative"
    },
    [theme.breakpoints.down('xs')]: {
      width: "40px"
    },
  },

})

export default withStyles(styles)(Header);
