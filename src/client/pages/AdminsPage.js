import React, {Component} from 'react';
import {connect} from 'react-redux';

import requireAuth from "../components/hocs/requireAuth";
import {getAdmins} from "../actions";

class AdminsPage extends Component{
    componentDidMount() {
        this.props.getAdmins();
    }

    renderAdmins() {
        return this.props.admins.map(admin => <li key={admin}>{admin}</li>)
    }

    render() {
        return (
            <div>
                Admins
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        admins: state.admins
    };
};

export const loadData = ({dispatch}) => {
    dispatch(getAdmins());
};

export default connect(mapStateToProps, {getAdmins})(requireAuth(AdminsPage));