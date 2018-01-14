import React from "react";
import ReactDOM from "react-dom";

import registerServiceWorker from "./utils/registerServiceWorker";
import "./styles/index.css";
import App from "./containers/App";


ReactDOM.render(
    <App />,
  document.getElementById("root")
);
registerServiceWorker();
