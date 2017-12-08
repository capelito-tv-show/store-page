import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import Card, { CardContent, CardMedia, CardAction,  } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import '../styles/App.css';
import Typography from 'material-ui/Typography';

import Header from '../components/Header';
import MediaCard from '../components/MediaCard';
import Footer from '../components/Footer';

class Blog extends Component {
  render() {
    return (
      // <MuiThemeProvider>
      <div>
        <Header />
        <div className="wrapper">
          <Grid container spacing={24} justify="left" >
            <Grid item xs={12} sm={4} md={4}  >
              <MediaCard />
            </Grid>
            <Grid item xs={12} sm={4} md={4}  >
              <MediaCard />
            </Grid>
            <Grid item xs={12} sm={4} md={4}  >
              <MediaCard />
            </Grid>
          </Grid>
        </div>
          <Footer />
        </div>
    )}
};

export default Blog;
