import React from 'react';
import $ from 'jquery';
import Loader from 'react-loader-spinner'
import axios from 'axios'
import APIURL from '../../../../constants/ApiUrl'
import { connect } from 'react-redux';
import {userSignUpSuccess} from '../../../../actions'
import store from 'store';
class Register extends React.Component {

	constructor(props) {
        super(props)
        
        this.state = {
            full_name: '',
            email: '',
            password: '',
            is_loading: false,
        }
        this.displayLoginDlg = this.displayLoginDlg.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    displayLoginDlg(){
        $(document).ready(()=>{
            $('#login').addClass('d-block');
            $('#register').addClass('d-none');
            $('#register').removeClass('d-block');
        })
    }

    validate(){
        if (this.state.full_name === ''){
            $('#fullname_wrap').addClass('border-danger');
            return false;
        }else{
            $('#fullname_wrap').removeClass('border-danger');
        }

        if (this.state.email === ''){
            $('#email_wrap').addClass('border-danger');
            return false;
        }else{
            $('#email_wrap').removeClass('border-danger');
        }

        if (this.state.password === ''){
            $('#pass_wrap').addClass('border-danger');
            return false;
        }else{
            $('#pass_wrap').removeClass('border-danger');
        }
        return true;
    }

    handleSubmit(event){
        event.preventDefault();
        if (!this.validate()){
            return;
        }
        this.setState({
            is_loading: true
        })
        const params = {
            full_name: this.state.full_name,
            email: this.state.email,
            password: this.state.password,
        }
        axios.post(APIURL.USER_SIGNUP, params).then(data => {
            this.setState({
                is_loading: false,
            })
            const result = data.data;
            this.props.userSignUpSuccess(result.data);
        }).catch(error => {
            console.log(error);
            this.setState({
                is_loading: false,
            })
        })
    }

    
    render () {
		return (
                
            <div className="row" id="register" className="d-none">
                <div className="col-lg-10 mx-auto my-5 text-center">
                    <div className="card box-shadow-v2 bg-white u-of-hidden">
                        <h2 className="bg-primary m-0 py-3 text-white">REGISTER</h2>
                            <div className="p-4 p-md-5">
                                
                            <form onSubmit={this.handleSubmit}>

                                <div className="input-group u-rounded-50 border u-of-hidden u-mb-20" id="fullname_wrap">
                                    <div className="input-group-addon bg-white border-0 pl-4 pr-0">
                                        <span className="icon icon-User text-primary"></span>
                                    </div>
                                    <input type="text" className="form-control border-0 p-3" placeholder="Your fullname" value={this.state.full_name}
                                        onChange={(event)=>{
                                            this.setState({
                                                full_name: event.target.value
                                            })
                                        }}/>
                                </div>

                                <div className="input-group u-rounded-50 border u-of-hidden u-mb-20" id="email_wrap">
                                    <div className="input-group-addon bg-white border-0 pl-4 pr-0">
                                        <span className="icon icon-Mail text-primary"></span>
                                    </div>
                                    <input type="text" className="form-control border-0 p-3" placeholder="Your email" value={this.state.email}
                                        onChange={(event)=>{
                                            this.setState({
                                                email: event.target.value
                                            })
                                        }}/>
                                </div>

                                <div className="input-group u-rounded-50 border u-of-hidden u-mb-20" id="pass_wrap">
                                    <div className="input-group-addon bg-white border-0 pl-4 pr-0">
                                        <span className="icon icon-ClosedLock  text-primary"></span>
                                    </div>
                                    <input type="password" className="form-control border-0 p-3" placeholder="Password" value={this.state.password}
                                        onChange={(event)=>{
                                            this.setState({
                                                password: event.target.value
                                            })
                                        }}/>
                                </div>
                                {/* <div className="text-left">
                                    <label className="custom-control custom-checkbox text-left">
                                        <input type="checkbox" className="custom-control-input"/>
                                        <span className="custom-control-indicator mt-1"></span>
                                        <span className="custom-control-description">I agree to the <a className="text-primary" href="terms-and-privacy-policy.html" target="_blank">terms</a> and conditions.</span>
                                    </label>
                                </div> */}

                                <button className="btn btn-primary btn-rounded u-mt-20 u-w-170 mb-4">
                                    Register Now
                                </button>
                                {
                                    this.state.is_loading && <Loader type="Oval" color="#0081FF" height={40} width={40}/>
                                }
                            </form>
                            <p className="mt-4">
                                Already have an account? <a className="text-primary pointer" onClick={this.displayLoginDlg}>Login</a>
                            </p>
                        </div> 
                    </div> 
                </div>
            </div>
		)
	}
}

export default connect (null, {userSignUpSuccess}) (Register);