import React, { Component } from "react";
import { JunctionActiveChild } from "react-junctions";

import Header from "./shared/view/Header";

export default class Authentication extends Component {
  renderContent() {
    let junction = this.props.junction;
    let Component =
      junction.activeChild &&
      junction.activeChild.component;
    if (!Component) {
      return <h2>404: お探しのページはありません</h2>;
    } else {
      return <JunctionActiveChild junction={junction} />;
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderContent()}
        {/* <JunctionActiveChild junction={this.props.junction} /> */}
      </div>
    );
  }
}
