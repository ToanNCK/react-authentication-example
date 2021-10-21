import React from "react";
import { Route, Link } from "react-router-dom";
import { history } from "@/_helpers";
import { authenticationService } from "@/_services";

class NavigationLandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe((x) =>
      this.setState({ currentUser: x })
    );
  }

  logout() {
    authenticationService.logout();
    history.push("/login");
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-light">
        <div className="container">
          <Link to="/landing-page" className="navbar-brand logo-image">
            <img src="../src/assets/images/logo.svg" alt="alternative" />
          </Link>

          <Route path="/landing-page/:path?" exact>
            <button
              className="navbar-toggler p-0 border-0"
              type="button"
              data-toggle="offcanvas"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="navbar-collapse offcanvas-collapse"
              id="navbarsExampleDefault"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#about">
                    About <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
              <span className="nav-item social-icons ml-auto">
                <a href="#your-link">
                  <span className="fab fa-facebook-f"></span>
                </a>
                <a href="#your-link">
                  <span className="fab fa-twitter"></span>
                </a>
                <a href="#your-link">
                  <span className="fab fa-instagram"></span>
                </a>
              </span>
            </div>
          </Route>
        </div>
      </nav>
    );
  }
}

export { NavigationLandingPage };
