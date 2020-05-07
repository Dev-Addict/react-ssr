import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getUsers} from "../actions";

class UsersPage extends Component {
    constructor(props) {
        super(props);
        this.renderUsers = this.renderUsers.bind(this);
    }

    componentDidMount() {
        this.props.getUsers();
    }

    renderUsers() {
        return this.props.users.map(user => <li key={user.name}>{user.name}</li>)
    }

    render() {
        return (
            <ul>
                {this.renderUsers()}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    };
};

export const loadData = store => {
    return store.dispatch(getUsers());
};

export default connect(mapStateToProps, {getUsers})(UsersPage);