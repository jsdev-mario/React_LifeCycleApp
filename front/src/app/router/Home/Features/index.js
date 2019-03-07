import React from 'react';

class Features extends React.Component {

	state = {
		
	};

	render () {
		return (
            <section id="features" className="bg-gray-v1">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <h2 className="h1">
                                Features that Make Your Project Stand Out!
                            </h2>
                            <div className="u-h-4 u-w-50 bg-primary rounded mt-4 u-mb-40 mx-auto"></div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="tabs tabs-v1 text-center">
                                <h4 className="u-mb-15 d-inline-block d-lg-block">
                                    <a href="#tab1" className="bg-white p-4 d-flex rounded box-shadow-v3" data-toggle="tab" role="tab">
                                        <span className="icon icon-Tools color-primary u-fs-36 mr-lg-3"></span>
                                        <span className="d-none d-lg-block">Easy to Customize</span>
                                    </a>
                                </h4>
                                <h4 className="u-mb-15 d-inline-block d-lg-block">
                                    <a href="#tab2" className="bg-white p-4 d-flex rounded" data-toggle="tab" role="tab">
                                        <span className="icon icon-MessageLeft color-primary u-fs-36 mr-lg-3"></span>
                                        <span className="d-none d-lg-block">Unlimited Support</span>
                                    </a>
                                </h4>
                                <h4 className="u-mb-15 d-inline-block d-lg-block">
                                    <a href="#tab3" className="bg-white p-4 d-flex rounded" data-toggle="tab" role="tab">
                                        <span className="icon icon-Starship2 color-primary u-fs-36 mr-lg-3"></span>
                                        <span className="d-none d-lg-block">Clean Code</span>
                                    </a>
                                </h4>
                                <h4 className="u-mb-15 d-inline-block d-lg-block">
                                    <a href="#tab4" className="bg-white p-4 d-flex rounded" data-toggle="tab" role="tab">
                                        <span className="icon icon-Magnet color-primary u-fs-36 mr-lg-3"></span>
                                        <span className="d-none d-lg-block">UI Elements</span>
                                    </a>
                                </h4>
                                <h4 className="u-mb-15 d-inline-block d-lg-block">
                                    <a href="#tab5" className="bg-white p-4 d-flex rounded" data-toggle="tab" role="tab">
                                        <span className="icon icon-Notebook color-primary u-fs-36 mr-lg-3"></span>
                                        <span className="d-none d-lg-block">Fully Responsive</span>
                                    </a>
                                </h4>
                            </div> 
                        </div>
                        <div className="col-lg-7 ml-auto">
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="tab1" role="tabpanel">
                                    <img className="box-shadow-v1" src="https://placeimg.com/670/510/tech" alt=""/>
                                </div>
                                <div className="tab-pane fade" id="tab2" role="tabpanel">
                                    <img className="box-shadow-v1" src="https://placeimg.com/670/510/animals" alt=""/>
                                </div>
                                <div className="tab-pane fade" id="tab3" role="tabpanel">
                                    <img className="box-shadow-v1" src="https://placeimg.com/670/510/arch" alt=""/>
                                </div>
                                <div className="tab-pane fade" id="tab4" role="tabpanel">
                                    <img className="box-shadow-v1" src="https://placeimg.com/670/510/nature" alt=""/>
                                </div>
                                <div className="tab-pane fade" id="tab5" role="tabpanel">
                                    <img className="box-shadow-v1" src="https://placeimg.com/670/510/people" alt=""/>
                                </div>
                            </div> 
                        </div> 
                    </div>
                </div> 
            </section> 
		)
	}
}

export default Features;