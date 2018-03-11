import React from "react";
import { Form } from "../../../shared/Form/form";
import { Button } from "../../../shared/Form/Button";
import TasteSelector from "./TasteSelector";
import CategorySelect from "../../Shared/Selects";

export const AddCoffeeList = ({
  Category,
  Title,
  Price,
  Detail,
  value,
  RateChange,
  handleSubmit,
  handleChange
}) => {
  return (
    <div className="admin-menu">
      {/* <Form className="category" value={Category} placeholder="カテゴリーを入力" /> */}
      <CategorySelect handleChange={handleChange} Category={Category} />
      <Form className="title" value={Title} placeholder="メニュー名" />
      <Form className="price" value={Price} placeholder="価格" />
      <Form className="detail" value={Detail} placeholder="メニューの詳細" />
      <TasteSelector />
      <Button handleSubmit={handleSubmit} link="/Admin/completed" />
    </div>
  );
};
