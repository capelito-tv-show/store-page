import React, { Component } from "react";
import { Form } from "../components/form";
import { compose, withState, withHandlers } from "recompose";
import { firebaseDb } from "../../../shared/Firebase";

const Enhance = compose(
  withState("category", "updateCategory", ""),
  withState("title", "updateTitle", ""),
  withState("price", "updatePrice", ""),
  withState("detail", "updateDetail", ""),
  withHandlers({
    Category: category => event => {
      category.updateCategory(event.target.value);
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
    handleSubmit: ({ category, title, price, detail }) => event => {
      event.preventDefault();
      firebaseDb.ref("menus/" + category).push({
        title,
        price,
        detail
      });
    }
  })
);

const AddMenu = ({ Category, Title, Price, Detail, handleSubmit }) => {
  return (
    <div className="admin-menu">
      <Form className="category" value={Category} placeholder="カテゴリーを入力" />
      <Form className="title" value={Title} placeholder="メニュー名" />
      <Form className="price" value={Price} placeholder="価格" />
      <Form className="detail" value={Detail} placeholder="メニューの詳細" />
      <button onClick={handleSubmit}>ぼたん</button>
    </div>
  );
};

export default Enhance(AddMenu);