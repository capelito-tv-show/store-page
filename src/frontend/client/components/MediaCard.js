//Packages
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
//firebase
import { firebaseApp, firebaseDb } from '../../shared/Firebase';
//Material-UI
import Grid from 'material-ui/Grid';
import Card, { CardContent, CardMedia, CardAction,  } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import '../styles/App.css';
import Typography from 'material-ui/Typography';
//Components
import Header from './Header';

const styles = {
  media: {
    height: 200,
  },
  card: {
    boxshadow: 0,
  }
};

class MediaCard extends Component {
  render() {
    const {key, title} = this.props;
    return(
      <div>
        <Card >
          <CardMedia
            image="../images/coffee.jpg"
            title="Coffee sample"
          />
          <CardContent>
            <Typography type="headline" component="h2">
              {title}
            </Typography>
            <Typography component="p">
              {/* {this.state.content} */}
              torimahuga
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired,
}

export default withStyles(styles)(MediaCard);
