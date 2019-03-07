import React from 'react';
import PropTypes from 'prop-types';

class StepBar extends React.Component {
    
    getStep1Style(){
        if (this.props.step > 0){
            return {
                color: 'white'
            };
        }
        return {}
    }

    getStep2Style(){
        if (this.props.step > 1){
            return {
                color: 'white'
            };
        }
        return {}
    }

    getStep3Style(){
        if (this.props.step > 2){
            return {
                color: 'white'
            };
        }
        return {}
    }

    getStep4Style(){
        if (this.props.step > 3){
            return {
                color: 'white'
            };
        }
        return {}
    }

    render() {
        return (
            <div className="stepbar-container">
                <div className="steplabel-container d-flex">
                    <div className="col">
                        <h5 style={this.getStep1Style()} className="font-weight-bold text-uppercase mb-1 stepbar-title">Current Living City</h5>
                        <h6 style={this.getStep1Style()}>Step 1</h6>
                    </div>
                    <div className="col">
                        <h5 style={this.getStep2Style()} className="font-weight-bold text-uppercase mb-1 stepbar-title">Annual Salary</h5>
                        <h6 style={this.getStep2Style()}>Step 2</h6>
                    </div>
                    <div className="col">
                        <h5 style={this.getStep3Style()} className="font-weight-bold text-uppercase mb-1 stepbar-title">City you want</h5>
                        <h6 style={this.getStep3Style()}>Step 3</h6>
                    </div>
                    <div className="col">
                        <h5 style={this.getStep4Style()} className="font-weight-bold text-uppercase mb-1 stepbar-title">Result</h5>
                        <h6 style={this.getStep4Style()}>Completed</h6>
                    </div>
                </div>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" 
                    style={{
                        width: `${(this.props.step) / this.props.total_step * 100}%`
                    }} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        )
    }
}

StepBar.propTypes = {
    step: PropTypes.number,
    total_step: PropTypes.number,
};

StepBar.defaultProps = {
    step: 0,
    total_step: 4
}



export default StepBar;

