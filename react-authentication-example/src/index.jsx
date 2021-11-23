import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BasicLayout, LandingPageLayout } from "./Commons";

// setup fake backend
// import { configureFakeBackend } from './_helpers';
// configureFakeBackend();

render(
  <BrowserRouter>
    <Switch>
      <Route path="/landing-page/:path?" exact component={LandingPageLayout} />
      <Route component={BasicLayout} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("app")
);
