import React, { Component } from "react";
import Grid from "material-ui/Grid";
import { Link } from "react-junctions";
import Button from "material-ui/Button";
import MenuImage from "../../shared/images/drip.jpg";
import IntroTitle from "../../shared/images/IntroTitle.png";
import StoreImage from "../../shared/images/maincontents/shop_2.jpg";
import ItemImage from "../../shared/images/machine.jpg";

// import SimpleSlider from "../home/MainImage";

class Main extends React.Component {
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.wrapper}>
        <div className={classes.top}>
          <div className={classes.bloc}>
            <div className={classes.MainVisual}>
              <div className={classes.MainImg} />
            </div>
          </div>
          <Grid container className={classes.intro}>
            <Grid item xs={12} md={6} lg={6} className={classes.inner}>
              <div className={classes.MainIntro}>
                <img src={IntroTitle} className={classes.IntroTitle} />
                <p className={classes.p}>
                  おかげさまで13周年を迎えました。<br />
                  一粒一粒を選別した生豆を大切に焙煎した「一杯のおいしい珈琲」を
                  お客様に楽しんでいただき、<br />
                  お客様が満足できる「くつろぎのパートナー」になりたいと思います。<br />
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.second}>
          <Grid container className={classes.intro}>
            <Grid item xs={12} md={6} lg={6} className={classes.inner}>
              <div className={classes.card}>
                <img src={StoreImage} className={classes.CardImage} />
                <h4 className={classes.MainTitle}>
                  店内でおくつろぎいただけます。
                </h4>
                <p>
                  厳選して仕入れた珈琲の生豆を自家焙煎し、店内でお楽しみいただけます。<br />
                  ネルドリップで丁寧に入れた珈琲と、自家製のケーキでゆとりの時間をお過ごしください。
                </p>
                <Button className={classes.linkToMenu}>ご購入の仕方</Button>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} className={classes.innerRight}>
              <div className={classes.card}>
                <img src={ItemImage} className={classes.CardImage} />
                <h4 className={classes.MainTitle}>珈琲豆を販売しています。</h4>
                <p>
                  ご自宅でもお楽しみいただけるよう、自家焙煎の珈琲豆を販売しています。<br />
                  店内には静岡市にちなんだオリジナルブレンド珈琲など、<br />
                  20種類以上の珈琲豆を取り揃えております。<br />
                  お好みの珈琲豆がきっとみつかるはずです。
                </p>
                <Button className={classes.sellButton}>
                  <Link>販売中の珈琲豆</Link>
                </Button>
                <Button className={classes.howToBuy}>ご購入の仕方</Button>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.second}>
          <Grid container className={classes.intro}>
            <h4>huga
            </h4>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Main;
