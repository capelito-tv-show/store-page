import React, { Component } from "react";
import { MenuForm } from "./components/form";
import { firebaseDb } from "../../shared/Firebase";
import * as Firebase from "firebase";

class AddMenu extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleDetailChange = this.handleDetailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    title: "",
    price: "",
    detail: ""
  };

  handleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handlePriceChange = e => {
    this.setState({
      price: e.target.value
    });
  };

  handleDetailChange = e => {
    this.setState({
      detail: e.target.value
    });
  };

  handleCategoryChange = e => {
    this.setState({
      category: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    firebaseDb.ref("menus/" + this.state.category).push({
      title: this.state.title,
      price: this.state.price,
      detail: this.state.detail
    });
  };

  render() {
    return (
      <div className="FormBox">
        <div className="wrapper">
          <input
            type="text"
            placeholder="カテゴリ"
            onChange={this.handleCategoryChange}
            value={this.state.category}
          />
          <input
            type="text"
            placeholder="メニュー名を入力"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <input
            type="text"
            placeholder="価格を入力"
            onChange={this.handlePriceChange}
            value={this.state.price}
          />
          <input
            type="text"
            placeholder="メニューの詳細"
            onChange={this.handleDetailChange}
            value={this.state.detail}
          />
          <button type="submit" onClick={this.handleSubmit}>
            提出する
          </button>
        </div>
      </div>
    );
  }
}

export default AddMenu;
