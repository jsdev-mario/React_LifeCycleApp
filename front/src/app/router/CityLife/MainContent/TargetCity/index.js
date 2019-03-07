import React from 'react';
import { connect } from 'react-redux';
import { Select } from 'react-inputs-validation';
import { 
    setTargetCity,
    setStep,
} from '../../../../../actions';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';

class TargetCity extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            cities: null,
            validate: false,
        };
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
    }
    
    componentDidMount(){
        const dataSet = require('../../../../data/cost_of_living_indices.json');
        this.setState({
            cities: dataSet,
        })
    }

    prevStep(){
        this.props.setStep(this.props.step - 1)
    }

    nextStep(){
        if(!this.props.targetCity){
            return;
        }
        this.props.setStep(this.props.step + 1)
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
            <div className="row" id="target_city">
                <div className="col-12 text-center">
                    <h1 className="text-white citylife_title mt-6">Which city do you wish to live in?</h1>
                </div>
                <div className="col-lg-5 col-md-6 mx-auto">
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
                            height: '50px'
                        }}
                        customStyleContainer={{
                            backgroundColor: 'white',
                            height: '50px'
                        }}
                        customStyleSelect={{
                            backgroundColor: 'white',
                            height: '30px'
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
                </div>
                <div className="col-lg-9 col-md-10 col-sm-12 mx-auto mt-6">
                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-md btn-rounded btn-danger text-white u-w-110" onClick={this.prevStep}>PREV</button>
                        </div>
                        <div className="col-6 text-right">
                            {this.props.targetCity && <button className="btn btn-md btn-rounded btn-success u-w-110" onClick={this.nextStep}>NEXT</button>}
                        </div>
                    </div>
                </div>
            </div> 
		)
	}
}

const mapStateToProps = ({ citylife}) => {
    const {targetCity, step} = citylife;
    return {targetCity, step};
}

export default connect (mapStateToProps, {
    setTargetCity,
    setStep
}) (TargetCity);