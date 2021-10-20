import React from 'react';
import { Helmet } from "react-helmet";
import { userService, authenticationService } from '@/_services';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            users: null
        };
    }

    componentDidMount() {
        userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        const { currentUser, users } = this.state;
        return (
            <div>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <h1>{currentUser.firstName} {currentUser.lastName}!</h1>
                <p>Bạn đã đăng nhập bằng React & JWT !!</p>
                <h3>Người dùng:</h3>
                {users &&
                    <ul>
                        {users.map(user =>
                            <li key={user.id}>{user.firstName} {user.lastName}</li>
                        )}
                    </ul>
                }
            </div>
        );
    }
}

export { HomePage };