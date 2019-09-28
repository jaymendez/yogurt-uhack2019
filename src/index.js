import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import MobileMap from "./components/map/mobileMap";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter forceRefresh={false}>
  <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/mobile">
      <MobileMap/>
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
