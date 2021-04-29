import React from 'react';
import { Router, Route } from 'react-router-dom';
import { history } from '@/_helpers';
import { PrivateRoute } from '@/_components';
import { BasicConcepts, LoginPage, HomePage, ComponentsView, EasyUi, Charts, HelloWorld } from '@/Views';
import { Footer, Navigation } from '@/Commons';


class BasicLayout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        };
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <Navigation />

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

                    <Footer />
                </div>
            </Router>
        );
    }
}

export { BasicLayout };