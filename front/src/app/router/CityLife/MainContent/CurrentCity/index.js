import React from 'react';
import { connect } from 'react-redux';
import { Select } from 'react-inputs-validation';
import { 
    setCurrentCity,
    setStep,
} from '../../../../../actions';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';


class CurrentCity extends React.Component {

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
        if (this.props.step === 1){
            return;
        }
        this.props.setStep(this.props.step - 1)
    }

    nextStep(){
        if(!this.props.currentCity){
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

        const getSelectedCurrentCityNo = () =>{
            if (!this.state.cities || !this.props.currentCity){
                return -1;
            }
            let no = -1;
            Object.keys(this.state.cities).sort().forEach((key, index) => {
                if(key === this.props.currentCity.key){
                    no = index;
                }
            });
            return no;
        }

        return (
            <div className="row" id="current_city">
                <div className="col-12 text-center">
                    <h1 className="text-white citylife_title mt-6">Which city do you currently live in?</h1>
                </div>
                <div className="col-lg-5 col-md-6 mx-auto">
                    <Select
                        tabIndex="1" 
                        id='location'
                        name='location'
                        value={getSelectedCurrentCityNo()}
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
                        onChange={(selected_current_city, e) => {
                            console.log(Object.keys(this.state.cities).sort()[selected_current_city]);
                            let newCurrentCity = this.state.cities[Object.keys(this.state.cities).sort()[selected_current_city]]
                            newCurrentCity.key = Object.keys(this.state.cities).sort()[selected_current_city]
                            this.props.setCurrentCity(newCurrentCity);
                        }}
                        onBlur={(e) => {}}
                        validationOption={{
                            name: 'Current City', 
                            check: true,
                            required: true 
                        }}
                    />
                </div>
                <div className="col-lg-9 col-md-10 col-sm-12 mx-auto mt-6">
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6 text-right">
                            {this.props.currentCity && <button className="btn btn-md btn-rounded btn-success u-w-110" onClick={this.nextStep}>NEXT</button>}
                        </div>
                    </div>
                </div>
            </div> 
		)
	}
}

const mapStateToProps = ({ citylife}) => {
    const {currentCity, step} = citylife;
    return { currentCity, step};
}

export default connect (mapStateToProps, {
    setCurrentCity,
    setStep
}) (CurrentCity);