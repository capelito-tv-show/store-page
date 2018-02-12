import React, { Component } from "react";
import App from './App';

import Home from "./client/home/Home";
import Menu from "./client/menu/containers/Menu";
import Access from "./client/access/Access";
import Gallary from "./client/gallary/Gallary";
import CommercialTransaction from "./client/privacy/about_buisiness";
import News from "./client/articles/News";
import AddMenu from "./cms/menus/containers/Enhance";

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
    "/Access": createPageTemplate({
      title: "珈琲工房すがのまでの道のりです。",
      component: Access
    }),
    "/CommercialTransaction": createPageTemplate({
      title: "",
      component: CommercialTransaction
    }),
    "/admin/cms/menu": createPageTemplate({
      title:"",
      component: AddMenu
    }),
  },
  component: App

});
