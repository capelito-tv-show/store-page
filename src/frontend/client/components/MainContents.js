import React, { Component } from "react";
import Grid from "material-ui/Grid";
import { withStyles } from "material-ui/styles";

import "../styles/App.css";
// import MainImage from '../shared/images/store-outside2.jpg';
import MainImage from "../shared/images/maincontents/shop_2.jpg";

const styles = {
  about: {
    width: "80%",
    padding: "20px",
    margin: "auto"
  },
  MainImage: {
    paddingBottom: "230px",
  }
};

class MaineContents extends Component {
  render() {
    const classes = this.props.classes;

    return (
      <div className="mainContents">
        <Grid container spacing={0} className={classes.MainImage}>
          <Grid item xs={12}>
            <img className="MainImage" src={MainImage} alt="珈琲工房すがの" />
          </Grid>
        </Grid>
        <div className={classes.about}>
          <h3>珈琲工房すがの</h3>
          <p>
            厳選して仕入れたコーヒーの生豆を、 自家焙煎して販売しています。
            特に、珈琲工房すがのオリジナルの、静岡市を世界地図に例えたブレンド豆は絶品です！
            お客様に楽しみながらコーヒー豆を選んでいただきたいと考えています。
          </p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MaineContents);
