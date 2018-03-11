import React from "react";
import { withStyles } from "material-ui/styles";
import { Form } from "../../../shared/Form/form";
import { Link } from "react-junctions";
import CategorySelect from "../../Shared/Selects";

const styles = theme => ({
  root: {

  },
  formList: {
    display: "table",
  },
  detail: {
    display: "tableCell",
    width: "100%",
    padding: "15px"
  },
  form: {
    padding: "10px",
    margin: "5px"
  }
})


const AddMenu = ({
  classes,handleChange,Category, Title, Price, Detail, handleSubmit }) => {
  return (
    <div className={classes.root}>
      <ul>
        <li className={classes.formList}>
          <a><CategorySelect handleChange={handleChange} Category={Category} /></a>
          <a><Form className={classes.form} value={Title} placeholder="メニュー名" /></a>
          <a><Form className={classes.form} value={Price} placeholder="価格" /></a>
        </li>
        <Form className={classes.detail} value={Detail} placeholder="メニューの詳細" />
      </ul>
      <button onClick={handleSubmit}>
        <Link href="/Admin/completed">メニューを送信する</Link>
      </button>
    </div>
  );
};

export default withStyles(styles)(AddMenu);
