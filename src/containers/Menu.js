import React, { Component } from 'react';
import '../styles/App.css';

import Hidden from 'material-ui/Hidden';
import Grid from 'material-ui/Grid';
import Card, { CardContent } from 'material-ui/Card';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ListCard from '../components/ListCard';
import Drawer from '../components/Drawers';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <Header />
        <div className="wrapper">
          <Grid container spacing={0} justify="left" >
            <Grid item xs={10} md={8}  >
              <Card>
                <CardContent>
                  <Card />
                </CardContent>
              </Card>
            </Grid>
            <Hidden mdDown>
              <Grid item xs={2} md={3}>
                  <ListCard />
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <Grid item xs={2} md={3}>
                  <Drawer />
              </Grid>
            </Hidden>
          </Grid>
        </div>
        <Footer />
      </div>
    )}
};

export default Menu;
