import React, { Component } from "react";
import { JunctionActiveChild } from "react-junctions";
import * as firebase from "firebase";
import Header from './Header/containers/Enhance';
import Auth from './Authentication/Containers/Enhance';

export default class Authentication extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log(firebaseUser);
      } else {
        return(
          <div>
            <Auth />
          </div>
        )
      }
    });
  }

  renderContent() {
    let junction = this.props.junction;
    let Component =
      junction.activeChild &&
      junction.activeChild.component;
    if (!Component) {
      return (
        <h2>お探しのページはありません</h2>
      )
    } else {
      return <JunctionActiveChild junction={junction} />;
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderContent()}
      </div>
    );
  }
}
