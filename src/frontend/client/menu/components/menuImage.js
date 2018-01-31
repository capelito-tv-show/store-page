import React, { Component } from "react";
import image from "../../shared/images/bottole-beans.jpg";

const imgStyles = {
  width: "100%"
};

export default class MenuImage extends Component {
  render() {
    return (
      <div>
        <img src={image} style={imgStyles} />
      </div>
    );
  }
}
