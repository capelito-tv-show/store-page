import React, { Component } from "react";
import App from "./App";

import Home from "./client/home/Home";
import Menu from "./client/menu/containers/Menu";
import Access from "./client/access/Access";
import Gallary from "./client/gallary/Gallary";
import CommercialTransaction from "./client/privacy/about_buisiness";
// import News from "./client/articles/News";
import AddMenu from "./cms/menus/containers/Enhance";
import AddCoffeeList from "./cms/coffeeList/containers/Enhance";
import Completed from "./cms/Redirect/Completed";
import AddNews from "./cms/news/hoc/Enhance";

import { createJunctionTemplate, createPageTemplate } from "junctions";

export const AppJunctionTemplate = createJunctionTemplate({
  children: {
    "/": createPageTemplate({
      title: "珈琲工房すがの：駿府公園すぐちかく",
      component: Home
    }),
    "/Menu": createPageTemplate({
      title: "珈琲工房すがの：メニュー",
      component: Menu
    }),
    // "/News": createPageTemplate({
    //   title: "珈琲工房すがの：ニュース",
    //   component: News
    // }),
    // "/News": createPageTemplate({
    //   title: "珈琲工房すがの：珈琲豆",
    //   component: CoffeeList
    // }),
    "/Access": createPageTemplate({
      title: "珈琲工房すがのまでの道のりです。",
      component: Access
    }),
    "/CommercialTransaction": createPageTemplate({
      title: "",
      component: CommercialTransaction
    }),
    "/admin/cms/menu": createPageTemplate({
      title: "",
      component: AddMenu
    }),
    "/admin/cms/completed": createPageTemplate({
      title: "",
      component: Completed
    }),
    "/admin/cms/news": createPageTemplate({
      title: "",
      component: AddNews
    }),
    "/admin/cms/coffee": createPageTemplate({
      title: "",
      component: AddCoffeeList
    })
  },
  component: App
});
