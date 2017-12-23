import React, { Component } from 'react';
import '../styles/App.css'
import { withScriptjs,withGoogleMap, GoogleMap, Marker, } from 'react-google-maps';

import Header from '../components/Header';
import Footer from '../components/Footer';

//Rreact-google-maps
const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 34.982739, lng: 138.385021 }}
  >
    <Marker
      position={{ lat: 34.982739, lng: 138.385021 }}
    />
  </GoogleMap>
));


class Access extends Component {
  render() {
    return (
      <div>

        {/* Header */}
        <Header />
        {/* MainContent */}
        <div className="wrapper">
          <div className="">
            <MapWithAMarker
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `500px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default Access;
