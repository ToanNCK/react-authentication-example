import React from "react";
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

import { history } from '@/_helpers';
import { authenticationService } from '@/_services';

class Navigation extends React.Component {
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
                                </NavDropdown>
                                <a onClick={this.logout} className="nav-item nav-link">Logout</a>
                            </div>
                        </nav>

                    }
            </div>
        );
    }
}

export { Navigation };