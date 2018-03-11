import React, { Component } from "react";
import {JunctionActiveChild} from 'react-junctions';

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
