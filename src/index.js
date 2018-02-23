import React from "react";
import ReactDOM from "react-dom";

import { JunctionNavigation } from 'react-junctions';
import { AppJunctionTemplate } from './frontend/Route';
import registerServiceWorker from "./utils/registerServiceWorker";
import "./index.css";
import App from "./frontend/Route";


ReactDOM.render(
  <JunctionNavigation
    id='navigation'
    root={App}
    waitForInitialContent
  />,
  document.getElementById("root")
);
// registerServiceWorker();
