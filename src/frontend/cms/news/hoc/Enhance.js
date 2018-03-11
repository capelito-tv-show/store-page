import React from "react";
import DatePicker from "react-datepicker";
import { firebaseDb } from "../../../../frontend/shared/Firebase";
import moment from "moment";
import { compose, withState, withHandlers } from "recompose";

import "react-datepicker/dist/react-datepicker.css";
import AddNews from '../components/AddNews';
import News from '../containers/News';

const Enhance = compose(
  withState("description", "updateValue", ""),
  withState("title", "setTitle", ""),
  withState("subTitle", "setSubTitle", ""),
  withState("date", "", moment().format("MM/DD/YYYY")),
  withHandlers({
    Description: description => event => {
      description.updateValue(event.target.value);
    },
    Title: title => event => {
      title.setTitle(event.target.value);
    },
    SubTitle: subTitle => event => {
      subTitle.setSubTitle(event.target.value);
    },
    Submit: ({ date, title, subTitle, description }) => event => {
      event.preventDefault();
      if (title == "" || description == "") {
        alert("タイトルまたはテキストを入力してください")
      } else {
        firebaseDb.ref("news/").push({
          date,
          title,
          subTitle,
          description
        });
      };
    }
  })
);

export default Enhance(News);
