import React, { Component } from "react";
import { JunctionActiveChild } from "react-junctions";
import * as firebase from "firebase";

export default class Authentication extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log(firebaseUser);
      } else {
        console.log("not loged in ");
      }
    });
  }

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
        <h1>Helloo</h1>
        {/* <JunctionActiveChild junction={this.props.junction} /> */}
        {this.renderContent()}
      </div>
    );
  }
}
