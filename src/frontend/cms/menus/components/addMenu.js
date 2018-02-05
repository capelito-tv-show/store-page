import React, { Component } from "react";
import {childForm} from "./form";

function Form(childForm) {
  return class extends Component {
    constructor() {
      super();

      this.state = {price: 13}
    }
      render() {
        return (
          <childForm value={this.state.price}
        )
      }
  }
}

const EnhanceForm = Form(childForm);
