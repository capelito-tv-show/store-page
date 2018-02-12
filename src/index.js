import React from "react";
import ReactDOM from "react-dom";

import { JunctionNavigation } from 'react-junctions';
import { AppJunctionTemplate } from './frontend/Route';
import registerServiceWorker from "./utils/registerServiceWorker";
import "./index.css";
import App from "./frontend/App";


ReactDOM.render(
  <JunctionNavigation root={AppJunctionTemplate} />,
  document.getElementById("root")
);
registerServiceWorker();
