import Client from "./Client";
import { createJunctionTemplate, createPageTemplate } from "junctions";

import Home from "./home/Home";
import Menu from "./menu/containers/Menu";
import Access from "./access/Access";
import CommercialTransaction from "./privacy/about_buisiness";

export default createJunctionTemplate(({ split }) => ({
  component: Client,
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
    })
  }
}));
