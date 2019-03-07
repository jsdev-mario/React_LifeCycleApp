import React from 'react';
import {connect} from 'react-redux';
import Menu from './Menu';
import Jumbotron from './Jumbotron';
import AboutUs from './AboutUs';
import Features from './Features';
import ProjectManage from './ProjectManage';
import ClientReviews from './ClientReviews';
import Princing from './Pricing';
import ContactUs from './ContactUs';
import Footer from './Footer';
import {initCityLife} from '../../../actions';




class Home extends React.Component {

	state = {
		
	};

	componentDidMount(){
		this.props.initCityLife();
	}

	render () {
		return (
			<div>
				<Menu/>
				<Jumbotron/>
				{/* <AboutUs/>
				<Features/>
				<ProjectManage/>
				<ClientReviews/>
				<Princing/>
				<ContactUs/> */}
				<Footer/>
			</div>
		)
	}
}

export default connect(null, {
    initCityLife
})(Home);
