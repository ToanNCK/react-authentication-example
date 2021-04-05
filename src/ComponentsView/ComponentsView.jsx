import React from 'react';
import { Alert } from 'react-bootstrap';
import { userService, authenticationService } from '@/_services';

class ComponentsView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            users: null,
            alerts: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark',]
        };
    }

    componentDidMount() {
        userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        const { currentUser, users } = this.state;
        const data = this.state.alerts;
        return (
            <div>
                <h3>Người dùng: {currentUser.firstName} {currentUser.lastName}</h3>
                {
                    data &&
                    data.map((variant, idx) => (
                        <Alert key={idx} variant={variant}>
                            This is a {variant} alert—check it out!
                        </Alert>
                    ))

                }

            </div>
        );
    }
}

export { ComponentsView };