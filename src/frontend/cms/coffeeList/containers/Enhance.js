import React from "react";
import { compose, withState, withHandlers } from "recompose";
import { firebaseDb } from "../../../shared/Firebase";
import {AddCoffeeList} from '../components/AddCoffeeList';

import "react-select/dist/react-select.css";

const Enhance = compose(
  // withState("category", "updateCategory", ""),
  withState("Category", "setState", "huga"),
  withState("title", "updateTitle", ""),
  withState("price", "updatePrice", ""),
  withState("detail", "updateDetail", ""),
  withHandlers({
    // Category: category => event => {
    //   category.updateCategory(event.target.value);
    // },
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
      firebaseDb.ref("menus/" + Category).push({
        title,
        price,
        detail
      });
    },
    handleChange: Category => event => {
      Category.setState(event.target.value)
    }
  })
);


export default Enhance(AddCoffeeList);
