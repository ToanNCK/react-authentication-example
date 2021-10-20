import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BasicLayout } from './Commons';
import { LandingPageLayout } from './Commons';

// setup fake backend
// import { configureFakeBackend } from './_helpers';
// configureFakeBackend();

render(
    <Router>
        <Switch>
            <Route path='/landing-page/:path?' exact>
                <LandingPageLayout />
            </Route>

            <Route>
                <BasicLayout />
            </Route>
        </Switch>
    </Router>, document.getElementById('app')
);