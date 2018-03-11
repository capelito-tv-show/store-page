import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-junctions';
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import HomeContent from '../components/Card';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class DashBoard extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} md={6}>
          <HomeContent
            Title="ニュース"
            Content="ここではニュースの編集などができます。"
            MyLink="/Admin/news/"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <HomeContent
            Title="メニュー"
            Content="メニューの追加、編集を行えます。"
            MyLink="/Admin/menu/"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <HomeContent
            Title="珈琲豆リスト"
            Content="珈琲豆のリストを更新できます"
            MyLink="/Admin/coffee-list/"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <h1>huga</h1>
        </Grid>

      </Grid>
    );
  }
}


export default withStyles(styles)(DashBoard);
