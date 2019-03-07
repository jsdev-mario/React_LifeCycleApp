import React from 'react';
import $ from 'jquery';
import {connect} from 'react-redux';
import { userSignOutSuccess } from '../../../../actions';
import { NavLink } from 'react-router-dom';
import store from 'store';

class Menu extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            
        }
        this.logOut = this.logOut.bind(this);
    }

    logOut(){
        this.props.userSignOutSuccess();
        store.remove('auth_user');
    }

	render () {
		return (
            <header className="header header-shrink header-inverse fixed-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <NavLink className="navbar-brand" to="/">
                            <span className="logo-default"><img src="assets/img/logo-default.png" alt=""/></span>
                            <span className="logo-inverse"><img src="assets/img/logo-inverse.png" alt=""/></span>
                        </NavLink>
                        <button className="navbar-toggler p-0" data-toggle="collapse" data-target="#navbarNav">
                            <div className="hamburger hamburger--spin js-hamburger">
                                <div className="hamburger-box">
                                    <div className="hamburger-inner"></div>
                                </div>
                            </div>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="#" data-scrollto="about">about</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" data-scrollto="features">FEATURES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" data-scrollto="reviews">REVIEWS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" data-scrollto="pricing">pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" data-scrollto="contactus">Contact Us</a>
                                </li> */}
                                {
                                    this.props.authUser && 
                                    <li className="nav-item">
                                        <a className="nav-link btn btn-sm btn-rounded btn-green u-w-110" onClick={this.logOut}>LogOut</a>
                                    </li>
                                }
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
		)
	}
}

const mapStateToProps = ({user}) => {
    const {authUser} = user;
    return {authUser};
}

export default connect(mapStateToProps, {userSignOutSuccess})(Menu);