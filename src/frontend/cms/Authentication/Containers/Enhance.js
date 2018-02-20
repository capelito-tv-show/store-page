import React from "react";
import { compose, withState, withHandlers } from "recompose";
import * as firebase from "firebase";

import { auth } from "../../../shared/Firebase";
import { Auth } from '../Components/Form';

const Enhance = compose(
  withState("email", "setEmail", ""),
  withState("password", "setPassword", ""),
  withHandlers({
    onEmailChange: email => event => {
      email.setEmail(event.target.value);
    },
    onPassChange: password => event => {
      password.setPassword(event.target.value);
    },
    Login: ({ email, password }) => event => {
      event.preventDefault();
      console.log({ email, password });
      const mail = email;
      const pass = password;
      const promise = auth.signInWithEmailAndPassword(mail, pass);
      promise.catch(event => console.log(event.message));
    },
    SignUp: ({ email, password }) => event => {
      event.preventDefault();
      const mail = email;
      const pass = password;
      const promise = auth.signInWithEmailAndPassword(mail, pass);
      promise.catch(event => console.log(event.message));
    },
    SignOut: () => {
      firebase.auth().signOut();
    }
  })
);

export default Enhance(Auth);
