import React from "react";

import { withStyles } from "material-ui/styles";
import Card, { CardContent } from "material-ui/Card";
import Divider from "material-ui/Divider";

// import "../styles/App.css";

const styles = theme => ({
  instruction: {
    textAlign: "left",
    margin: "0 0 0 200px",
    padding: "20px"
  },
  Card: {
    boxShadow: "none",
  },
  '@media (max-width: 910px)': {
    instruction: {
      margin: "0 auto",
      padding: "10px",
    }
  }
});

function CommercialTransaction(props) {
  return (
    <div className={props.classes.instruction}>
      <Card className={props.classes.Card}>
        <CardContent >
        <div className="replace-box">
          <h3>返品について</h3>
          <Divider />
          <p>
            生ものですので、お客様都合の返品はお受けいたしかねます。
            配送時の商品破損や商品に問題があった場合、またご注文内容と違う商品が届いた場合、
            商品到着後7日以内にお電話またはFAXにてご連絡ください。
            送料は当店で負担します。
            7日を過ぎますと、返品のご要望をお受けできなくなりますので、ご了承ください。
          </p>
        </div>
        </CardContent>
        <CardContent>
          <div className="shipment-box">
            <h3>商品の発送について</h3>
            <Divider />
            <p>
              午後4時までのご注文は、翌々日に発送いたします。
              午後4時以降のご注文は、翌日のご注文承りとし、3営業日以内に発送いたします。
              在庫切れの時は、お時間をいただく場合がございますので、ご了承ください。
              ※FAXでご注文された場合、ご注文後4日経ってもお届け日お知らせの連絡が無いときは、
              何らかの事情でご注文が確認できていない可能性がありますので、
              恐れ入りますが、お電話にてもう一度ご注文ください。
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(styles)(CommercialTransaction);
