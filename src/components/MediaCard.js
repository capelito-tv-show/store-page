import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import Card, { CardContent, CardMedia, CardAction,  } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import '../styles/App.css';
import Typography from 'material-ui/Typography';

import Header from './Header';

const styles = {
  media: {
    height: 200,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return(
    <div>
      <Card>
        <CardMedia
          className={classes.media}
          image="../images/coffee.jpg"
          title="Coffee sample"
        />
        <CardContent>
          <Typography type="headline" component="h2"> Cooffee Sample</Typography>
          <Typography component="p">
            これはサンプル投稿です。
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MediaCard);
