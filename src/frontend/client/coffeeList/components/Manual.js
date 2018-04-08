import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from "material-ui/Typography";
import Divider from 'material-ui/Divider';


import step1 from "../../shared/images/step1.jpg";
import step2 from "../../shared/images/step2.jpg";
import step3 from "../../shared/images/step3.jpg";
import step4 from "../../shared/images/step4.jpg";

const styles = theme => ({
  content: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    }
  },
  card: {
    marginTop: "-8px",
  },
  divider: {
    margin: "10px 0"
  },
  img: {
    maxWidth: "100%",
    maxHeight: "130px",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "80px",
    }
  },
  p: {
    fontSize: "12px",
  }
});

class CoffeeList extends Component {
  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.container}>
        <div className={classes.content}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="title" >ご購入の流れ</Typography>
              <Divider className={classes.divider}/>
              <img  src={step1} className={classes.img} />
              <Typography variant="subheading" component="h3" >1. お好みの味を確認</Typography>
              <Typography component="p" className={classes.p}>苦味、酸味、香りなど、お客様が重視している事を伺い、おすすめ商品を選びます。</Typography>
              <Divider className={classes.divider}/>
              <img  src={step2} className={classes.img} />
              <Typography variant="subheading" component="h3" >２．日替わりの試飲珈琲を提供</Typography>
              <Typography component="p" className={classes.p}>
                日替わりでお出ししているお試し用珈琲を提供しています。珈琲の味をご確認ください。<br />
                豆のままか、または粉にするかを確認します。
              </Typography>
              <Divider className={classes.divider}/>
              <img  src={step3} className={classes.img} />
              <Typography variant="subheading" component="h3" >３．お客様が使用しているコーヒードリップの器具を確認</Typography>
              <Typography component="p" className={classes.p}>
                使用されている器具にあった挽き方で、珈琲豆をミルで挽きます。
              </Typography>
              <Divider className={classes.divider}/>
              <img  src={step4} className={classes.img} />
              <Typography variant="subheading" component="h3" >４．珈琲豆の袋詰め（200ｇ以上ご購入の場合）</Typography>
              <Typography component="p" className={classes.p}>
                ガス抜き用クラフト袋にコーヒー豆またはコーヒー粉を入れ、当店ポイントカードをお渡しします。<br />
                ※200ｇの場合：クラフト包装に包装<br />
                ※300ｇ以上の場合：バルブに包装。<br />
                ※クラフト包装袋とバルブは、珈琲豆が炭酸ガスを発生するのを応用して、新鮮さを保つよう開発された袋です。<br />
              </Typography>

              <Typography>ご注文の際は「ご希望商品、住所、電話番号、お名前」をおしらせください。</Typography>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardContent className={classes.title}>
              <Typography variant="title" align="left">珈琲豆の購入はお電話で</Typography>
              <Divider className={classes.divider}/>
              <Typography variant="headline" component="h2" >0120-48-1567</Typography>
              <Typography>ご注文の際は「ご希望商品、住所、電話番号、お名前」をおしらせください。</Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CoffeeList);
