import React from "react";
import { Router, Route } from "react-router-dom";
import { history } from "@/_helpers";
import { PrivateRoute } from "@/_components";
import {
  BasicConcepts,
  LoginPage,
  HomePage,
  ComponentsView,
  EasyUi,
  Charts,
  HelloWorld,
  RegisterPage,
} from "@/Views";
import { Footer, Navigation } from "@/Commons";
import { Helmet } from "react-helmet";

class BasicLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  render() {
    var source = "../src";
    return (
      <Router history={history}>
        <div>
          <Helmet>
            <link
              href={source + "/assets/bootstrap/css/bootstrap.min.css"}
              rel="stylesheet"
            />
            <link href={source + "/assets/styles.css"} rel="stylesheet" />

            <script
              src={source + "/assets/bootstrap/js/react.production.min.js"}
            ></script>
            <script
              src={source + "/assets/bootstrap/js/react-dom.production.min.js"}
            ></script>
            <script
              src={source + "/assets/bootstrap/js/react-bootstrap.min.js"}
            ></script>
          </Helmet>
          <Navigation />

          <div className="jumbotron min-h-80vh">
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <PrivateRoute exact path="/" component={HomePage} />
                  <PrivateRoute
                    exact
                    path="/components"
                    component={ComponentsView}
                  />
                  <PrivateRoute exact path="/easy-ui" component={EasyUi} />
                  <PrivateRoute exact path="/charts" component={Charts} />
                  <PrivateRoute
                    exact
                    path="/basic-concepts"
                    component={BasicConcepts}
                  />
                  <PrivateRoute
                    exact
                    path="/ex-hello-world"
                    component={HelloWorld}
                  />
                  <Route path="/login" component={LoginPage} />
                  <Route path="/register" component={RegisterPage} />
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export { BasicLayout };
