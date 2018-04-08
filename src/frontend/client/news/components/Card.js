import React, { Component } from "react";
import { firebaseDb } from "../../../shared/Firebase";
import Grid from "material-ui/Grid";
import Typography from 'material-ui/Typography';
import Paper from "material-ui/Paper";


class NewsContent extends Component {
  constructor() {
    super();
    this.state = { news: [] };
  }

  componentWillMount() {
    const blendRef = firebaseDb.ref("news/");
    let _this = this;

    const newsRef = blendRef.on("value", function(snapshot) {
      const news = snapshot.val();
      _this.setState({
        news: news
      });
    });
  }

  render() {
    const classes = this.props.classes;
    const news = this.state.news;
    const menu = Object.keys(news).map(key => {
      return (
        <Grid item xs={12} key={key}>
          <Paper className={classes.Card}>
            <ul className={classes.content}>
              <li>
                <Typography component="h1" className={classes.date}>
                  {news[key].date}
                </Typography>
                <Typography className={classes.title}>
                  {news[key].title}
                </Typography>
                <Typography className={classes.subTitle} component="p">
                    {news[key].subTitle}
                </Typography>
                <Typography component="p">
                  {news[key].description}
                </Typography>

              </li>
            </ul>
          </Paper>
        </Grid>
      );
    });
    return (
      <div className={classes.wrapper}>
        <Grid container className={NewsContent}>
          <div className={classes.categoryTitle}>
          </div>
          <Grid item xs={12} className={classes.MainContent}>
            <Grid container>{menu}</Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default NewsContent;
