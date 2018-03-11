import React, { Component } from 'react'
import Authentication from './Authentication';
import { createJunctionTemplate, createPageTemplate } from 'junctions'

import Menu from "./menus/containers";
import DashBoard from './Dashboard/containers/Dashboard';
import AddCoffeeList from "./coffeeList/containers/Enhance";
import CoffeeList from './coffeeList/containers/CoffeeList';
import AddNews from "./news/hoc/Enhance";
import Completed from "./Redirect/Completed";


export default createJunctionTemplate(({ split }) => ({
  component: Authentication,
  children: {
    "/": createPageTemplate({
      title: "",
      component: DashBoard
    }),
    "/menu": createPageTemplate({
      title: "",
      component: Menu
    }),
    "/completed": createPageTemplate({
      title: "",
      component: Completed
    }),
    "/news": createPageTemplate({
      title: "",
      component: AddNews
    }),
    "/coffeeList": createPageTemplate({
      title: "",
      component:  CoffeeList
    })
  }
}));
