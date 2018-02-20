import React, { Component } from "react";
import Auth from "./Containers/Enhance";
import { lifecycle } from "recompose";
import * as firebase from "firebase";

const Authentication = lifecycle({
  componentDidMount() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log(firebaseUser);
      } else {
        console.log("not loged in ");
      }
    });
  }
});

export default Authentication(Auth)
