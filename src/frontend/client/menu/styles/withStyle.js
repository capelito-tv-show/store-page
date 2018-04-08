import React, { Component } from "react";

export const styles = theme => ({
  categoryTitle: {
    width: "100%",
    background: "rgba(49,21,1,1)",
  },
  mainTitle: {
    margin: "8px 0",
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
    listStyle: "none",
    margin: "0"
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
