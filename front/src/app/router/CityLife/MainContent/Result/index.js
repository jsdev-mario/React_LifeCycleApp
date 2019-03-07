import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { 
    setStep,
    setResultBackground
} from '../../../../../actions';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';
import $ from 'jquery';
import ReactTooltip from 'react-tooltip'

class Result extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            currencyRates: null,
            newCostOfLiving: 0,
            rentPercentChange: 0,
            groceriesPercentChange: 0,
            restaurantPercentChange: 0,
            purchasingPercentChange: 0,
            scores: null
        };

        this.prevStep = this.prevStep.bind(this);
    }
    
    componentDidMount(){
        this.initData();
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.props.targetCity.key !== prevProps.targetCity.key) {
            this.initData();
        }
    }

    initData(){
        this.getCityLifeData();
        this.getCurrencyRate();
        this.getCityPhotos();
        this.getCityScore();
    }

    getCityLifeData(){
        let temp_newCostOfLiving =this.props.salary + this.props.salary * ((this.props.targetCity.index - this.props.currentCity.index) /  this.props.currentCity.index);
        this.setState({
            newCostOfLiving: temp_newCostOfLiving,
            rentPercentChange: Math.round(((this.props.targetCity.rent_index - this.props.currentCity.rent_index)/this.props.currentCity.rent_index) * 100),
            groceriesPercentChange: Math.round(((this.props.targetCity.groceries_index - this.props.currentCity.groceries_index)/this.props.currentCity.groceries_index) * 100),
            restaurantPercentChange: Math.round(((this.props.targetCity.restaurant_index - this.props.currentCity.restaurant_index)/this.props.currentCity.restaurant_index) * 100),
            purchasingPercentChange: Math.round(((this.props.targetCity.purchasing_index - this.props.currentCity.purchasing_index)/this.props.currentCity.purchasing_index) * 100),
        })
    }

    getCurrencyRate(){
        axios.get('https://openexchangerates.org/api/latest.json?app_id=0cc840f2153c4d378b1a2687918435e7')
            .then(data => {
                this.setState({
                    currencyRates: data.data.rates
                })
            }).catch(error => {
                console.log(error);
            });
    }

    getCityPhotos(){
        if (this.props.targetCity.slug !== ''){
            axios.get(`https://api.teleport.org/api/urban_areas/slug:${this.props.targetCity.slug.toLowerCase()}/images/`)
            .then(data => {
                this.props.setResultBackground(data.data.photos[0].image.web)
            }).catch(error => {
                console.log(error);
            });
        }else{
            this.setState({
                photo: 'assets/img/software/hero-banner.jpg'
            })
        }
    }

    getCityScore(){
        if (this.props.targetCity.slug !== ''){
            axios.get(`https://api.teleport.org/api/urban_areas/slug:${this.props.targetCity.slug.toLowerCase()}/scores/`)
            .then(data => {
                console.log(data.data)
                this.setState({
                    scores: data.data
                })
                $(document).ready(()=>{
                    $('#city_summary').html(data.data.summary);
                })
            }).catch(error => {
                console.log(error);
            });
        }else{
            this.setState({
                photo: 'assets/img/software/hero-banner.jpg'
            })
        }
    }

    prevStep(){
        this.props.setStep(this.props.step - 1)
    }

    render () {
        
        const newCityCurrencyCostOfLiving = () => {
            if (this.state.currencyRates){
                return this.state.currencyRates[this.props.targetCity.currency_type] / this.state.currencyRates[this.props.currentCity.currency_type] * this.state.newCostOfLiving
            }
            return this.state.newCostOfLiving;
        }
        
        return (
            <div className="row" id="result">
                <div className="col-12 text-center mb-5">
                    <h2 className="text-white mt-5">To have the same standard of living, a comparable salary would be</h2>
                    <h1 className="text-aqua">
                        ≈ {this.props.currentCity.currency_type} {(Math.round(this.state.newCostOfLiving/100)*100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
                        &nbsp;&nbsp;( {this.props.targetCity.currency_type} {(Math.round(newCityCurrencyCostOfLiving()/100)*100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}  )
                    </h1>
                </div>
                <div className="col-12 mb-5">
                    <div id="city_summary"></div>
                </div>
                <div className="col-12 text-center mb-6">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-5">
                            <div className="data_content" data-tip data-for='rent'  data-place="bottom">
                                <img src="assets/img/home-icon.png" alt=""/>
                                <h3 className="text-white my-md-3 my-1"  data-tip="hello world">Rent/Living</h3>
                                <div 
                                    className="percentage">{Math.abs(this.state.rentPercentChange)} % &nbsp;
                                    {this.state.rentPercentChange > 0 ? <i className="fa fa-arrow-up arrow-up"></i> : <i className="fa fa-arrow-down arrow-down"></i>}
                                </div>
                            </div>
                            <ReactTooltip id='rent' type="light" effect="float">
                                {
                                    this.state.rentPercentChange > 0 ? 
                                    <span>Rent is {this.state.rentPercentChange}% more expensive<br></br> in {this.props.targetCity.key}</span> :
                                    <span>Rent is cheaper by {this.state.rentPercentChange}% <br></br>in {this.props.targetCity.key}</span>
                                }
                            </ReactTooltip>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5">
                            <div className="data_content" data-tip data-for='groceries'  data-place="bottom">
                                <img src="assets/img/groceries-icon.png" alt=""/>
                                <h3 className="text-white my-md-3 my-1">Groceries</h3>
                                <div className="percentage">
                                    {Math.abs(this.state.groceriesPercentChange)} % &nbsp;
                                    {this.state.groceriesPercentChange > 0 ? <i className="fa fa-arrow-up arrow-up"></i> : <i className="fa fa-arrow-down arrow-down"></i>}
                                </div>
                            </div>
                            <ReactTooltip id='groceries' type="light" effect="float">
                                {
                                    this.state.groceriesPercentChange > 0 ? 
                                    <span>Groceries is {this.state.groceriesPercentChange}% more expensive<br></br> in {this.props.targetCity.key}</span> :
                                    <span>Groceries is cheaper by {this.state.groceriesPercentChange}% <br></br>in {this.props.targetCity.key}</span>
                                }
                            </ReactTooltip>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5">
                            <div className="data_content" data-tip data-for='restaurant'  data-place="bottom">
                                <img src="assets/img/restaurant-icon.png" alt=""/>
                                <h3 className="text-white my-md-3 my-1">Dining Out</h3>
                                <div className="percentage">
                                    {Math.abs(this.state.restaurantPercentChange)} % &nbsp;
                                    {this.state.restaurantPercentChange > 0 ? <i className="fa fa-arrow-up arrow-up"></i> : <i className="fa fa-arrow-down arrow-down"></i>}
                                </div>
                            </div>
                            <ReactTooltip id='restaurant' type="light" effect="float">
                                {
                                    this.state.restaurantPercentChange > 0 ? 
                                    <span>Dining Out is {this.state.restaurantPercentChange}% more expensive<br></br> in {this.props.targetCity.key}</span> :
                                    <span>Dining Out is cheaper by {this.state.restaurantPercentChange}% <br></br>in {this.props.targetCity.key}</span>
                                }
                            </ReactTooltip>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5">
                            <div className="data_content" data-tip data-for='purchase'  data-place="bottom">
                                <img src="assets/img/purchase-icon.png" alt=""/>
                                <h3 className="text-white my-md-3 my-1">Purchasing Power</h3>
                                <div className="percentage">
                                    {Math.abs(this.state.purchasingPercentChange)} % &nbsp;
                                    {this.state.purchasingPercentChange > 0 ? <i className="fa fa-arrow-up arrow-up"></i> : <i className="fa fa-arrow-down arrow-down"></i>}
                                </div>
                            </div>
                            <ReactTooltip id='purchase' type="light" effect="float">
                                {
                                    this.state.restaurantPercentChange > 0 ? 
                                    <span>Purchasing power is {this.state.restaurantPercentChange}% higher<br></br> in {this.props.targetCity.key}</span> :
                                    <span>Purchasing power is {this.state.restaurantPercentChange}% lower<br></br>in {this.props.targetCity.key}</span>
                                }
                            </ReactTooltip>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-9 col-md-10 col-sm-12 mx-auto mt-5">
                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-md btn-rounded btn-danger text-white u-w-110" onClick={this.prevStep}>PREV</button>
                        </div>
                        <div className="col-6 text-right"></div>
                    </div>
                </div>
            </div> 
		)
	}
}

const mapStateToProps = ({ui, citylife}) => {
    const {resultBackground} = ui;
    const {targetCity, step, currentCity, salary} = citylife;
    return {resultBackground, targetCity, step, currentCity, salary};
}

export default connect (mapStateToProps, {
    setStep,
    setResultBackground
}) (Result);