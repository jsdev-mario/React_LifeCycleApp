import React from 'react';
import Login from '../Login';
import Register from '../Register';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Jumbotron extends React.Component {

	state = {
		
	};

	render () {
        console.log(this.props.authUser);
		return (
            <div id="jumb_auth">
                <section className="u-pt-md-150 pb-0 u-h-100vh" style={{
                        background:'url(assets/img/software/hero-banner.jpg) no-repeat',
                        backgroundPosition: 'top center'}}>
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-6 mx-auto u-pt-80">
                                <h1 className="display-4 u-fw-600 text-white">
                                    Dream of a more beautiful life. 
                                </h1>
                                <p className="u-fs-22 text-white u-lh-1_8 py-4">
                                You can find a fantastic city where you can improve your life. Make a better life with your constant efforts.
                                </p>
                                <button data-toggle="modal" data-target="#demomodal" className="btn btn btn-rounded btn-warning ml-3 u-w-170">
                                    Details
                                </button>
                            </div>
                            {
                                !this.props.authUser ? 
                                (<div className="col-md-6"><Login/><Register/></div>) :
                                (<div className="col-md-6 mx-auto u-pt-80 mb-4">   
                                    <h1 className="display-4 u-fw-600 text-white">
                                        Hi {this.props.authUser.full_name}!<br/> Welcome to CityLife.
                                    </h1>
                                    <p className="u-fs-22 text-white u-lh-1_8 py-4">
                                    Ever thought how far your current salary will go in another city? This simple app will calculate how much more (or less) you would need in order to maintain the same standard of living in another city!
                                    </p>
                                    <NavLink to="/citylife" className="btn btn btn-rounded btn-danger ml-3 u-w-170 text-white">START</NavLink>
                                </div>)
                            }
                        </div> 
                    </div> 
                </section> 
                <div class="modal fade" id="demomodal" tabindex="-1" role="dialog" aria-labelledby="demomodalTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div className="row">
                                    <div className="col-12 text-center px-4">
                                        <img src="assets/img/favicon/logo.png" alt="" style={{width: '100px'}}/>
                                        <h2 className="text-primary">CITYLIFE</h2>
                                        <p style={{fontSize: '12px', lineHeight: '18px'}}>
                                            The cost-of-living index, attributed to Russian economist A. 
                                            A. Konüs, is a theoretical price index that measures the relative cost of living over time (or regions).
                                            The COF index has been widely used to show the difference in living between cities and is the basis for this application.
                                        </p>

                                        <h4 className="text-primary mt-5">Cost Of Living Data</h4>
                                        <img src="assets/img/teleport_logo.svg" alt=""  style={{width: '80px'}} className="mb-2"/>
                                        <p style={{fontSize: '12px', lineHeight: '18px'}} className="mb-4">
                                            The &nbsp;{new Date().getUTCFullYear()}&nbsp;cost of living indices were obtained from the largest database of user contributed data about cities and countries worldwide&nbsp;
                                            <a href="https://www.numbeo.com/cost-of-living/" target='_blank' className="text-primary font-weight-bold">Numbeo</a>
                                        </p>
                                        <p style={{fontSize: '12px', lineHeight: '18px'}}>
                                            Further data with regards to income/ living costs were obtained through&nbsp;
                                            <a href="https://developers.teleport.org/api/" target='_blank' className="text-primary font-weight-bold">Teleport's</a>&nbsp; 
                                            Public API's and cross referenced with up to date currency conversions from the &nbsp;
                                            <a href="https://status.openexchangerates.org/" target='_blank' className="text-primary font-weight-bold">Open Exchange Rates</a>&nbsp; API.
                                        </p>

                                        <h4 className="text-primary mt-5">React & Redux</h4>
                                        <img src="assets/img/react-redux-icon.png" alt=""  style={{width: '80px'}} className="mb-2"/>
                                        <p style={{fontSize: '12px', lineHeight: '18px'}}>
                                            This simple app marks my first foray into component oriented development and served as a great learning experience in learning the main concepts behind React. 
                                            React on it's own wouldn't generally be suitable for a fully scaled application but handled very well for a simple app like this.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer d-flex justify-content-center">
                                <button type="button" class="btn btn-sm btn-rounded btn-danger ml-3 u-w-170" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		)
	}
}

const mapStateToProps = ({user}) => {
    const {authUser} = user;
    return {authUser};
}

export default connect (mapStateToProps, null) (Jumbotron);