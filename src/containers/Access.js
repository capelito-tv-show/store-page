import React, { Component } from 'react';
import '../styles/App.css'

import Header from '../components/Header';
import Footer from '../components/Footer';
import StoreMap from '../components/GoogleMaps';


class Access extends Component {
  render() {
    return (
      <div>

        {/* Header */}
        <Header />

        {/* MainContent */}
        <div className="wrapper">
          <div className="mainContents">
            <StoreMap />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default Access;
