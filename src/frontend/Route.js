import React from "react";
import { JunctionActiveChild } from "react-junctions";
import { createJunctionTemplate, createPageTemplate } from "junctions";

import App from "./App";

export default createJunctionTemplate(({ split }) => ({
  component: App,
  children: {
    "/Home": split(() => import("./client/Route").then(m => m.default)),
    "/Admin": split(() => import("./cms/Route").then(m => m.default))
  }
}));
