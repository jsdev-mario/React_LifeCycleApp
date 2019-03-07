import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import APIURL from '../../../../constants/ApiUrl'
import Loader from 'react-loader-spinner'
import store from 'store';
import {connect} from 'react-redux';
import {userSignInSuccess} from '../../../../actions'

class Login extends React.Component {

	constructor(props) {
        super(props)
        
        this.state = {
            user: '',
            password: '',
            is_loading: false,
        }

        this.displayRegDlg = this.displayRegDlg.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    displayRegDlg(){
        $(document).ready(()=>{
            $('#login').addClass('d-none');
            $('#login').removeClass('d-block');
            $('#register').addClass('d-block');
        })
    }

    validate(){
        if (this.state.user === ''){
            $('#user_wrap').addClass('border-danger');
            return false;
        }else{
            $('#user_wrap').removeClass('border-danger');
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
            user: this.state.user,
            password: this.state.password,
        }
        axios.post(APIURL.USER_SIGNIN, params).then(data => {
            this.setState({
                is_loading: false,
            })
            const result = data.data;
            this.props.userSignInSuccess(result.data);
        }).catch(error => {
            console.log(error.response.data);
            this.setState({
                is_loading: false,
            })
            if (error.response.data.code === 0){
                $('#user_wrap').addClass('border-danger');
            }else{
                $('#pass_wrap').addClass('border-danger');
            }
        })
    }


	render () {
		return (
            <div className="row" id="login">
                <div className="col-lg-10 mx-auto my-5 text-center">
                    <div className="card box-shadow-v2 bg-white u-of-hidden">
                        <h2 className="bg-primary m-0 py-3 text-white">LOG IN</h2>
                        <div className="p-4 p-md-5">
                            <form onSubmit={this.handleSubmit}>

                                <div className="input-group u-rounded-50 border u-of-hidden u-mb-20" id="user_wrap">
                                    <div className="input-group-addon bg-white border-0 pl-4 pr-0">
                                        <span className="icon icon-User text-primary"></span>
                                    </div>
                                    <input type="text" className="form-control border-0 p-3" placeholder="Your email or full name" value={this.state.user}
                                        onChange={(event)=>{
                                            this.setState({
                                                user: event.target.value
                                            })
                                        }}/>
                                </div>

                                <div className="input-group u-rounded-50 border u-of-hidden u-mb-20" id="pass_wrap">
                                    <div className="input-group-addon bg-white border-0 pl-4 pr-0">
                                        <span className="icon icon-Mail text-primary"></span>
                                    </div>
                                    <input type="password" className="form-control border-0 p-3" placeholder="Your password" value={this.state.password}
                                        onChange={(event)=>{
                                            this.setState({
                                                password: event.target.value
                                            })
                                        }}/>
                                </div>
                                    {/* <div className="d-flex justify-content-between align-items-center">
                                        <label className="custom-control custom-checkbox text-left">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <span className="custom-control-indicator mt-1"></span>
                                            <span className="custom-control-description">Remember me</span>
                                        </label>
                                        <a href="">Forgot password?</a>
                                    </div> */}
                                <button className="btn btn-primary btn-rounded u-mt-20 u-w-170 mb-4">
                                    Login Now
                                </button>
                                {
                                    this.state.is_loading && <Loader type="Oval" color="#0081FF" height={40} width={40}/>
                                }
                            </form>
                            <p className="pt-4">
                                Don't have an account? <a className="text-primary pointer" onClick={this.displayRegDlg}>Sign up</a>
                            </p>
                        </div> 
                    </div> 
                </div>
            </div> 
		)
	}
}

export default connect(null, {userSignInSuccess})(Login);