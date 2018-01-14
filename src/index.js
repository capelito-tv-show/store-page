import React from "react";
import ReactDOM from "react-dom";

import registerServiceWorker from "./utils/registerServiceWorker";
import "./index.css";
import App from "./frontend/App";


ReactDOM.render(
    <App />,
  document.getElementById("root")
);
registerServiceWorker();
