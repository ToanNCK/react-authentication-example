import React from 'react';
import { Router, Route, Link, NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

import { history } from '@/_helpers';
import { authenticationService } from '@/_services';
import { PrivateRoute } from '@/_components';
import { BasicConcepts, LoginPage, HomePage, ComponentsView, EasyUi, Charts, HelloWorld } from '@/Views';
import { Footer } from '@/Commons';


class BasicLayout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
    }

    logout() {
        authenticationService.logout();
        history.push('/login');
    }

    render() {
        const { currentUser } = this.state;
        return (
            <Router history={history}>
                <div>
                    {currentUser &&
                        <nav className="navbar navbar-expand navbar-dark bg-dark justify-content-center">
                            <div className="navbar-nav">
                                <Link to="/" className="nav-item nav-link">Home</Link>
                                <Link to="/components" className="nav-item nav-link">Components View</Link>
                                <Link to="/easy-ui" className="nav-item nav-link">Easy Ui</Link>
                                <Link to="/charts" className="nav-item nav-link">Charts</Link>
                                <NavDropdown title="Doc" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/basic-concepts">Các khái niệm cơ bản</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/basic-concepts">Not single page</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/#">Item add...</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Examples react js" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/ex-hello-world">Hello world</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/#">Item add...</NavDropdown.Item>
                                </NavDropdown>
                                <a onClick={this.logout} className="nav-item nav-link">Logout</a>
                            </div>
                        </nav>

                    }



                    <div className="jumbotron min-h-80vh">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 offset-md-2">
                                    <PrivateRoute exact path="/" component={HomePage} />
                                    <PrivateRoute exact path="/components" component={ComponentsView} />
                                    <PrivateRoute exact path="/easy-ui" component={EasyUi} />
                                    <PrivateRoute exact path="/charts" component={Charts} />
                                    <PrivateRoute exact path="/basic-concepts" component={BasicConcepts} />
                                    <PrivateRoute exact path="/ex-hello-world" component={HelloWorld} />
                                    <Route path="/login" component={LoginPage} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export { BasicLayout };