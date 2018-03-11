import React from "react";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent } from "material-ui/Card";
import { Form } from "../../../shared/Form/form";
import { Button } from "../../../shared/Form/Button";

const styles = {
  root: {
    width: "100%",
    textAlign: "left"
  },
  textarea: {
    minWidth: "100%",
    height: "200px"
  },
  title: {
    width: "100%",
    height: " 100px",
    fontSize: "20px"
  },
  subTitle: {
    width: "100%",
    height: "70px",
    fontSize: "20px"
  }
};

const AddNews = ({ Description, date, Title, SubTitle, Submit, classes }) => {
  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <p>今日の日付：{date}</p>
          <CardContent>
            <Form
              value={Title}
              placeholder="記事のタイトル"
              className={classes.title}
            />
          </CardContent>
          <CardContent>
            <Form
              value={SubTitle}
              placeholder="サブタイトル"
              className={classes.subTitle}
            />
          </CardContent>

          <CardContent>
            <textarea
              onChange={Description}
              placeholder="ここにテキストを入力"
              className={classes.textarea}
            />
          </CardContent>
          <CardActions>
            <Button handleSubmit={Submit} link="/Admin/completed/" />
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

export default withStyles(styles)(AddNews);
