import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import '../styles/App.css';

import MainContents from '../components/MainContents';
import Header from '../shared/view/Header';
import Footer from '../shared/view/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <MainContents />
      </div>
    );
  }
}

export default Home;
