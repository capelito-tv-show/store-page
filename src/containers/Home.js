import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import '../styles/App.css';

import MainContents from '../components/MainContents';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Home extends Component {
  render() {
    return (
      <div>

        {/* Header */}
        <Header />

        <MainContents />
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default Home;
