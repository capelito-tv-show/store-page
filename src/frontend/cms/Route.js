import React, { Component } from 'react'
import Authentication from './Authentication';
import { createJunctionTemplate, createPageTemplate } from 'junctions'

import AddMenu from "./menus/containers/Enhance";
import AddCoffeeList from "./coffeeList/containers/Enhance";
import AddNews from "./news/hoc/Enhance";
import Completed from "./Redirect/Completed";


export default createJunctionTemplate(({ split }) => ({
  component: Authentication,
  children: {
    "/menu": createPageTemplate({
      title: "",
      component: AddMenu
    }),
    "/cms/completed": createPageTemplate({
      title: "",
      component: Completed
    }),
    "/cms/news": createPageTemplate({
      title: "",
      component: AddNews
    }),
    "/cms/coffee": createPageTemplate({
      title: "",
      component: AddCoffeeList
    })
  }
}));
