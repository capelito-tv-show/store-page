import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import '../styles/App.css'
import MainImage from '../images/store-outside2.jpg';


class MaineContents extends Component {
  render() {
    return (
      <div className="mainContents">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <img
              className="MainImage"
              src={MainImage}
              alt="珈琲工房すがの"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MaineContents;
