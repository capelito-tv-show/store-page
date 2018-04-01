import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Main4 from "../../shared/images/sandwich-set.jpg";
import Main3 from '../../shared/images/gift-special.jpg';

import Main from '../components/Main';

const styles = theme => ({
  wrapper: {
    position: "absolute",
    top: "0",
    width: "100%",
    height: "100%",
    [theme.breakpoints.up("md")]: {
      left: "-130px",
      paddingLeft: "130px"
    }
  },
  top: {
    position: "relative",
    width: "100%",
    height: "100%",
    [theme.breakpoints.up("md")]: {
      // marginLeft: "-160px"
    }
  },
  bloc: {
    position: "absolute",
    width: "100%",
    height: "100%",
    boxSizing: "border-box"
  },
  MainVisual: {
    position: "absolute",
    width: "100%",
    height: "100%",
    padding: "40px 40px 40px 0",
    overflow: "hidden",
    boxSizing: "border-box"
  },
  MainImg: {
    height: "100%",
    width: "100%",
    background: `url(${Main3}) 50% 50% no-repeat`,
    backgroundSize: "cover",
    boxSizing: "border-box"
  },
  inner: {
    backgroundColor: "rgba(1,1,1,0.7)",
    height: "100%",
    padding:"0",
    fontWeight:"100",
    color: "white",
    [theme.breakpoints.up("md")]: {
      padding: "0 0 0 130px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0"
    }
  },
  IntroTitle: {
    width: "100%"
  },
  innerRight: {
    height: "100%",
    padding:"0",
    color: "black",
    fontWeight: "100",
    [theme.breakpoints.down("sm")]: {
      padding: "0"
    }
  },
  card: {
    padding: "100px",
    // bottom: 0,
    // position: "absolute",
    // width: "33%",
  },
  CardImage: {
    width: "100%",
    maxHeight: "180px",
    objectFit: "cover",
  },
  MainIntro: {
    padding: "100px",
    top: 78,
    position: "absolute",
    width: "33%",
  },
  intro: {
    position: "absolute",
    width: "100%",
    height: "100%",
    [theme.breakpoints.up("md")]: {
      paddingLeft: "130px"
    }
  },
  MenuImage: {
    margin: "0",
    width: "100%",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  },
  linkToMenu: {
    background: "none",
    border: "1px solid white",
    padding: "15px",
    color: "white"
  },
  sellButton: {
    padding: "15px",
    background: "rgba(49,21,1,1)",
    color: "white",
  },
  howToBuy: {
    background: "none",
    marginLeft: "10px",
    padding: "15px",
    border: "1px solid rgba(49,21,1,1)",
    color: "rgba(49,21,1,1)"
  }
});

export default withStyles(styles)(Main);
