import React from 'react';
import { connect } from 'react-redux';
import { Textbox } from 'react-inputs-validation';
import { 
    setAnnualSalary,
    setStep,
} from '../../../../../actions';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';

class AnnualSalary extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            validate: false,
        };
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
    }
    
    prevStep(){
        this.props.setStep(this.props.step - 1)
    }

    nextStep(){
        this.setState({
            validate: true
        });
        if(this.props.salary === 0){
            return;
        }
        this.props.setStep(this.props.step + 1)
    }

    
	render () {

        console.log('currentCity', this.props.currentCity);

        return (
            <div className="row" id="annual_salary">
                <div className="col-12 text-center">
                    <h1 className="text-white citylife_title mt-6">What's your current annual salary?</h1>
                </div>
                <div className="col-lg-5 col-md-6 mx-auto d-flex">
                    <Textbox value={this.props.currentCity.currency_type} readOnly
                        customStyleInput={{
                            backgroundColor: 'white',
                            height: '50px',
                            width: '80px',
                            textAlign: 'center',
                            fontSize: '18px',
                            fontWeight:'bold'
                        }}
                        customStyleWrapper={{
                            backgroundColor: 'white',
                            height: '50px',
                            width: '80px'
                        }}
                        validationOption={{
                            name: 'Verify Password',
                            check: false,
                        }}
                    />
                    <Textbox tabIndex="2" id="salary" name="salary" type='text' 
                        validate = {this.state.validate} value={this.props.salary} placeholder="Annual Salary"
                        onChange={(salary, e) => {
                            this.props.setAnnualSalary(Number(salary));
                        }}
                        customStyleInput={{
                            backgroundColor: 'white',
                            height: '50px',
                            width: '100%',
                            fontSize: '18px',
                            fontWeight:'bold'
                        }}
                        customStyleWrapper={{
                            backgroundColor: 'white',
                            height: '50px',
                            width: '100%'
                        }}
                        validationOption={{
                            name: 'Annual Salary',
                            type: 'number',
                            min: 1,
                            max: 999999999999999,
                            check: true,
                            required: true, 
                        }}
                    />
                </div>
                
                <div className="col-lg-9 col-md-10 col-sm-12 mx-auto mt-6">
                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-md btn-rounded btn-danger text-white u-w-110" onClick={this.prevStep}>PREV</button>
                        </div>
                        <div className="col-6 text-right">
                            {this.props.salary !== 0 && <button className="btn btn-md btn-rounded btn-success u-w-110" onClick={this.nextStep}>NEXT</button>}
                        </div>
                    </div>
                </div>
            </div> 
		)
	}
}

const mapStateToProps = ({citylife}) => {
    const {currentCity, step, salary} = citylife;
    return {currentCity, step, salary};
}

export default connect (mapStateToProps, {
    setAnnualSalary,
    setStep
}) (AnnualSalary);