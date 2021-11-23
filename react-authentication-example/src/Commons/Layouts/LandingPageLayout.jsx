import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { history } from "@/_helpers";
import { FooterLandingPage, NavigationLandingPage } from "@/Commons";
import { IndexLandingPage, DetailLandingPage } from "@/Views";
import { Helmet } from "react-helmet";

class LandingPageLayout extends React.Component {
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
        <Helmet>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="description" content="Your description" />
          <meta name="author" content="Your name" />
          <meta property="og:site_name" content="" />
          <meta property="og:site" content="" />
          <meta property="og:title" content="" />
          <meta property="og:description" content="" />
          <meta property="og:image" content="" />
          <meta property="og:url" content="" />
          <meta name="twitter:card" content="summary_large_image" />
          <title>Nico Webpage Title</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@600&display=swap"
            rel="stylesheet"
          />
          <link href={source + "/assets/css/bootstrap.css"} rel="stylesheet" />
          <link
            href={source + "/assets/css/fontawesome-all.css"}
            rel="stylesheet"
          />
          <link
            href={source + "/assets/css/styles-landingpage.css"}
            rel="stylesheet"
          />
          <link href={source + "/assets/styles.css"} rel="stylesheet" />
          <link rel="icon" href={source + "/assets/images/favicon.png"} />

          <script src={source + "/assets/js/jquery.min.js"}></script>
          <script src={source + "/assets/js/bootstrap.min.js"}></script>
          <script src={source + "/assets/js/jquery.easing.min.js"}></script>
          {/* <script src="source/assets/js/morphext.min.js" async></script>
          <script src="source/assets/js/cus.morphext.js" async></script> */}
          <script src={source + "/assets/js/scripts.js"} async></script>
        </Helmet>
        <NavigationLandingPage />
        <Switch>
          <Route path="/landing-page/project" component={DetailLandingPage}>
            <DetailLandingPage />
          </Route>

          <Route exact path="/landing-page" component={IndexLandingPage}>
            <IndexLandingPage />
          </Route>
        </Switch>
        <FooterLandingPage />
      </Router>
    );
  }
}

export { LandingPageLayout };
