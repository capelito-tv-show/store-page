import React, { Component } from "react";
import Slider from "react-slick";
import Grid from "material-ui/Grid";
import { withStyles } from "material-ui/styles";


import Main1 from "../shared/images/maincontents/shop_2.jpg";
import Main2 from "../shared/images/gift-special.jpg";
import Main3 from "../shared/images/sandwich-set.jpg";
import Main4 from "../shared/images/coffee.jpg";
import Main5 from "../shared/images/maincontents/P1010320.JPG";

import "../styles/App.css";

const styles = theme => ({
  MainVisual: {
  },
  MainText: {
    [theme.breakpoints.down('sm')]: {
      fontSize: "11px",
      textAlign: "left",
      padding: "10px",
    }
  }
})

class SimpleSlider extends Component {
  render() {
    const classes = this.props.classes;
    const settings = {
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    };
    return (
      <div>
        <Slider {...settings}>
          <div className={classes.MainVisual}>
            <img className="MainImage" src={Main1} />
            <p className={classes.MainText}>
              厳選して仕入れたコーヒーの生豆を、 自家焙煎して販売しています。{" "}
              <br />
              特に、珈琲工房すがのオリジナルの、静岡市を世界地図に例えたブレンド豆は絶品です！{" "}
              <br />
              お客様に楽しみながらコーヒー豆を選んでいただきたいと考えています。
            </p>
          </div>
          <div className={classes.MainVisual}>
            <img className="MainImage" src={Main2} />
            <p className={classes.MainText}>
              珈琲工房すがのオリジナルの、静岡にちなんだネーミングのブレンドコーヒーと、<br />
              厳選したブレンドコーヒーを通信販売しています。<br />
              お店の味が、お客様のお家でもお愉しみいただけます。<br />
              コーヒー豆は、100ｇ単位でご注文を承っております。<br />
            </p>
          </div>
          <div className={classes.MainVisual}>
            <img className="MainImage" src={Main3} />
            <p className={classes.MainText}>
              ネルドリップで丁寧に入れた本格派コーヒーと、<br />
              大人気の手作りケーキで、ゆとりの時間をお過ごしください。
            </p>
          </div>
          <div className={classes.MainVisual}>
            <img className="MainImage" src={Main5} />
            <p className={classes.MainText}>生豆や珈琲の木がお客様を迎えてくれます。</p>
          </div>
          <div className={classes.MainVisual}>
            <img className="MainImage" src={Main4} />
            <p className={classes.MainText}>
              店内で使用しているカップは全て高級と言う訳ではありませんが、<br />
              同じ柄では無く、色々愉しめる様、異なる物を揃えています。
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}

export default  withStyles(styles)(SimpleSlider)
