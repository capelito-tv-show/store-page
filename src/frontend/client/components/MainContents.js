import React, { Component } from "react";
import Grid from "material-ui/Grid";
import { withStyles } from "material-ui/styles";
import { firebaseDb } from "../../shared/Firebase";
import Typography from 'material-ui/Typography';
import Paper from "material-ui/Paper";


import "../styles/App.css";
import MainImage from "../shared/images/maincontents/shop_2.jpg";
import SimpleSlider from '../home/MainImage';

const styles = theme => ({
  mainContent: {
    paddingTop: "56px",
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    }
  },
  about: {
    // width: "80%",
    // padding: "20px",
    margin: "auto",
    textAlign: "left"
  },
  Card: {
    boxShadow: "none",
    background: "white",
  },
});

class MaineContents extends Component {
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
              </li>
            </ul>
          </Paper>
        </Grid>
      );
    });

    return (
      <div className={classes.mainContent}>
        <Grid container spacing={0} className={classes.MainImage}>
          <Grid item xs={12} md={6} >
            <SimpleSlider />
          </Grid>
          <Grid item xs={12} md={2} >
            <div className={classes.about}>
              <Typography >店長のひとこと</Typography>
              <div>{menu}</div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(MaineContents);
