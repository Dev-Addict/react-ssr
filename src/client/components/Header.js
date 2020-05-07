import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

const Header = () => {
    const authElm = this.props.auth ? (
        <a href={'/api/logout'}>Logout</a>
    ) : (
        <a href='/api/auth/google'>Log in</a>
    );
    return (
        <div>
            <Link to="/">SSR</Link>
            <Link to="/users">Users</Link>
            <Link to="/admins">Admins</Link>
            {authElm}
        </div>
    );
};

const mapStateToProps = ({auth}) => {
    return {auth};
};

export default connect(mapStateToProps)(Header);