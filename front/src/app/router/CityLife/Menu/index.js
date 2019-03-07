import React from 'react';
import {connect} from 'react-redux';
import { NavLink, withRouter} from 'react-router-dom';
import { Select } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';
import { 
    userSignOutSuccess,
    setTargetCity
} from '../../../../actions';

class Menu extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {

            cities: [],
            validate: false,
        }
        this.logOut = this.logOut.bind(this);
    }

    componentDidMount(){
        const dataSet = require('../../../data/cost_of_living_indices.json');
        this.setState({
            cities: dataSet,
        })
    }

    logOut(){
        this.props.userSignOutSuccess();
        this.props.history.push('/')
    }

	render () {
        const generateCitiesOptions = () => {
            if(!this.state.cities){
                return [];
            }
            return Object.keys(this.state.cities).sort().map((key, index) => {
                return {
                    id: index,
                    name: key,
                }
            })
        }

        const getSelectedTargetCityNo = () =>{
            if (!this.state.cities || !this.props.targetCity){
                return -1;
            }
            let no = -1;
            Object.keys(this.state.cities).sort().forEach((key, index) => {
                if(key === this.props.targetCity.key){
                    no = index;
                }
            });
            return no;
        }
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
                                {this.props.step === 4 && <li className="nav-item" style={{width: '250px'}}>
                                    <Select
                                        tabIndex="1" 
                                        id='location'
                                        name='location'
                                        value={getSelectedTargetCityNo()}
                                        customStyleOptionListContainer = {{
                                            maxHeight: '200px',
                                            overflowY: 'auto',
                                        }}
                                        validate = {this.state.validate}
                                        optionList={generateCitiesOptions()}
                                        customStyleWrapper={{
                                            backgroundColor: 'white',
                                        }}
                                        customStyleContainer={{
                                            backgroundColor: 'white',
                                        }}
                                        customStyleSelect={{
                                            backgroundColor: 'white',
                                        }}
                                        onChange={(selected_target_city, e) => {
                                            let newTargetCity = this.state.cities[Object.keys(this.state.cities).sort()[selected_target_city]]
                                            newTargetCity.key = Object.keys(this.state.cities).sort()[selected_target_city]
                                            this.props.setTargetCity(newTargetCity);
                                        }}
                                        onBlur={(e) => {}}
                                        validationOption={{
                                            name: 'City you want', 
                                            check: true,
                                            required: true 
                                        }}
                                    />
                                </li>}
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link" href="#" data-scrollto="about">HOME</NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn btn-sm btn-rounded btn-green u-w-110" onClick={this.logOut}>LogOut</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
		)
	}
}

const mapStateToProps = ({user, citylife}) => {
    const {authUser} = user;
    const {targetCity, step} = citylife;
    return {authUser, targetCity, step};
}

export default withRouter(connect(mapStateToProps, {
    userSignOutSuccess,
    setTargetCity
})(Menu));