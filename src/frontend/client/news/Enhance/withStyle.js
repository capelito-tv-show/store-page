import React from "react";
import { withStyles } from "material-ui/styles";
import NewsContent from '../components/Card'

const styles = theme => ({
  mainTitle: {
    paddingLeft: "18px",
    color: "white",
    textAlign: "left",
    fontWeight: "50"
  },
  Card: {
    boxShadow: "none",
    minHeight: "160px"
  },
  content: {
    textAlign: "left",
    padding: "16px 24px",
    listStyle: "none",
  },
  menuList: {
    paddingBottom: "5px"
  },
  menuCard: {
    padding: "0",
    margin: "0",
  },
  table: {
    display: "flex",
  },
  mainContent: {
    margin: "0 auto",
  },
  title: {
    fontWeight: "bold",
    width: "100%",
    display: "inline-block",
    fontSize: "18px",
    // [theme.breakpoints.down("md")]: {
    //   margin: "0"
    // }
  },
  subTitle: {
    marginBottom: "16px",
    borderBottom: "1px solid"
  },
  date: {
    fontSize: "12px",
    fontWeight: 400,
    marginBottom: "10px"
  },
  detail: {
    paddingBottom: "5px",
    margin: "0",
    fontSize: "11px"
    // borderBottom: "1px solid #D0D0D0"
  }
});



export default withStyles(styles)(NewsContent);
