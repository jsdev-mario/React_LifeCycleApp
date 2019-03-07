import React from 'react';

class Pricing extends React.Component {

	state = {
		
	};

	render () {
		return (
            <section id="pricing" className="bg-gray-v1">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="h1">Fair & Simple Pricing</h2>
                            <div className="u-h-4 u-w-50 bg-primary rounded mt-4 u-mb-40 mx-auto"></div>
                        </div>
                    </div>
                    <div className="row">
                    
                        <div className="col-md-4 mt-4">
                            <div className="bg-white box-shadow-v1 rounded">
                                <h4 className="m-0 py-4">
                                    Free
                                </h4>
                                <hr className="m-0"/>
                                <h2 className="u-fs-60 u-fw-600 py-4"><sup className="u-fs-20">$</sup>0.00</h2>
                                <hr className="m-0"/>
                                <ul className="list-unstyled u-py-40 u-lh-2">
                                    <li><strong>Unlimited</strong> searchable message</li>
                                    <li><strong>Unlimited</strong> apps and service</li>
                                    <li><strong>8GB</strong> file storage per team</li>
                                    <li><strong>100GB</strong> Monthly Bandwidth</li>
                                </ul>
                                <hr className="m-0"/>
                                <div className="u-py-40">
                                    <a href="" className="btn btn-primary btn-rounded">
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div> 
                    
                        <div className="col-md-4 mt-4">
                            <div className="bg-white box-shadow-v1 rounded">
                                <h4 className="m-0 py-4">
                                    Standard
                                </h4>
                                <hr className="m-0"/>
                                <h2 className="u-fs-60 u-fw-600 py-4 text-green"><sup className="u-fs-20">$</sup>9.50</h2>
                                <hr className="m-0"/>
                                <ul className="list-unstyled u-py-40 u-lh-2">
                                    <li><strong>Unlimited</strong> searchable message</li>
                                    <li><strong>Unlimited</strong> apps and service</li>
                                    <li><strong>8GB</strong> file storage per team</li>
                                    <li><strong>100GB</strong> Monthly Bandwidth</li>
                                </ul>
                                <hr className="m-0"/>
                                <div className="u-py-40">
                                    <a href="" className="btn btn-green btn-rounded">
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-md-4 mt-4">
                            <div className="bg-white box-shadow-v1 rounded">
                                <h4 className="m-0 py-4">
                                    Business
                                </h4>
                                <hr className="m-0"/>
                                <h2 className="u-fs-60 u-fw-600 py-4"><sup className="u-fs-20">$</sup>17.99</h2>
                                <hr className="m-0"/>
                                <ul className="list-unstyled u-py-40 u-lh-2">
                                    <li><strong>Unlimited</strong> searchable message</li>
                                    <li><strong>Unlimited</strong> apps and service</li>
                                    <li><strong>8GB</strong> file storage per team</li>
                                    <li><strong>100GB</strong> Monthly Bandwidth</li>
                                </ul>
                                <hr className="m-0"/>
                                <div className="u-py-40">
                                    <a href="" className="btn btn-primary btn-rounded">
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div> 
                </div>
            </section>
		)
	}
}

export default Pricing;