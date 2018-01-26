import React, { Component } from "react";
import * as firebase from "firebase";
import { firebaseConfig } from "../../../shared/Firebase/config";

class MenuCard extends Component {
  constructor() {
    super();
    firebase.initializeApp(firebaseConfig);
    this.state = {
      menus: []
    };
  }

  componentWillMount() {
    const rootRef = firebase.database().ref("menus/blend");
    let _this = this;

    const menusRef = rootRef.on("value", function(snapshot) {
      const m = snapshot.val();
      _this.setState({
        menus: m
      });
    });
  }

  render() {
    return (
      <div className={MenuCard}>
        <div className="menu-box">
          {this.state.menus.map(menu => (
            <div key={menu.key} className="menu-card">
              <h4>{menu.title}</h4>
              <p>{menu.price}</p>
              <p>{menu.detail}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MenuCard;
