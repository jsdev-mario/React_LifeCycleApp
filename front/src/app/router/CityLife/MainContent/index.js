import React from 'react';
import { connect } from 'react-redux';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';
import StepBar from './StepBar';
import CurrentCity from './CurrentCity';
import AnnualSalary from './AnnualSalary';
import TargetCity from './TargetCity';
import Result from './Result';


class MainContent extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            
        };
    }
    
    componentDidMount(){

    }
    
	render () {

        const setBackgroundStyle = () => {
            if (this.props.resultBackground){
                return {
                    backgroundImage: `url(${this.props.resultBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center'
                }
            }
            return {
                backgroundImage: 'url(assets/img/software/hero-banner.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            }
        }

        return (
            <div id="jumb_auth">
                <section data-dark-overlay="7"  className="u-pt-md-150 pb-0 u-h-100vh" style={setBackgroundStyle()}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 pt-5">
                                <StepBar step={this.props.step} total_step={4}/>
                                { this.props.step === 1 && <CurrentCity/>}
                                { this.props.step === 2 && <AnnualSalary/>}
                                { this.props.step === 3 && <TargetCity/>}
                                { this.props.step === 4 && <Result/>}
                            </div>
                        </div>
                    </div> 
                </section> 
            </div>
		)
	}
}

const mapStateToProps = ({ui, citylife}) => {
    const {resultBackground} = ui;
    const {step} = citylife;
    return {resultBackground, step};
}

export default connect (mapStateToProps, null) (MainContent);