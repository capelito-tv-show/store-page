import React, { Component } from "react";
import {JunctionActiveChild} from 'react-junctions';
import Header from "./client/shared/view/Header";
import Footer from "./client/shared/view/Footer";

class App extends Component {
  render() {
    let junction = this.props.junction
    return (
      <div className="App">
        <JunctionActiveChild junction={junction} />
      </div>
    );
  }
}

export default App;
