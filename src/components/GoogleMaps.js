import React, { Component } from 'react';
import {  withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { compose, withProps } from 'recompose';


  const GoogleMaps =  compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
      <GoogleMap
        defaultZoom={8}
        default Center={{ lat:138.385020, lng: 34.982731 }}
      >
        {props.isMarkerShown && <Marker position={{ lat:138.385020, lng: 34.982731 }} /> }
      </GoogleMap>
    )

class StoreMap extends Component {
  state = { isMarkerShown: false }

  render() {
    return (
      <GoogleMaps
        isMarkerShown={this.state.isMarkerShown}
      />
    )
  }
}

export default StoreMap;
