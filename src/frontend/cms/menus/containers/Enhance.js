import React, { Component } from "react";
import { Form } from "../../../shared/Form/form";
import { Button } from "../../../shared/Form/Button";
import { compose, withState, withHandlers } from "recompose";
import { firebaseDb } from "../../../shared/Firebase";
import { Link } from "react-junctions";

import AddMenu from "../components/AddMenu";



const Enhance = compose(
  withState("Category", "setState", ""),
  withState("title", "updateTitle", ""),
  withState("price", "updatePrice", ""),
  withState("detail", "updateDetail", ""),
  withHandlers({
    handleChange: Category => event => {
      Category.setState(event.target.value)
    },
    Title: title => event => {
      title.updateTitle(event.target.value);
    },
    Price: price => event => {
      price.updatePrice(event.target.value);
    },
    Detail: detail => event => {
      detail.updateDetail(event.target.value);
    },
    handleSubmit: ({ Category, title, price, detail }) => event => {
      event.preventDefault();
      if (title === "" || detail === "") {
        alert("タイトルまたは詳細を入力してください");
      } else {
        firebaseDb.ref("menus/" + Category).push({
          title,
          price,
          detail
        });
      }
    },
  })
);

export default Enhance(AddMenu);
