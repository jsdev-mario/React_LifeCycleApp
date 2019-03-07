import React from 'react';

class Footer extends React.Component {

	state = {
		year: new Date().getUTCFullYear(),
	};

	render () {
		return (
            <footer id="footer">
                <section className="bg-navy">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-5 col-md-6 mb-5">
                                <img src="assets/img/logo.png" alt=""/>
                                <p className="u-my-40">
                                Ever thought how far your current salary will go in another city? This simple app will calculate how much more (or less) you would need in order to maintain the same standard of living in another city!
                                </p>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-5 ml-auto">
                                <h4 className="text-white">Contact Info</h4>
                                <div className="u-h-4 u-w-50 bg-green rounded mt-3 u-mb-40"></div>
                                <ul className="list-unstyled">
                                    <li className="mb-3">
                                    <span className="icon icon-Mail text-green mr-2"></span> <a href="support@smartgaas.com">Syed.imran2512@gmail.com</a>
                                    </li>
                                </ul>
                                <ul className="list-inline social social-rounded mt-5">
                                    <li className="list-inline-item">
                                        <a href="https://github.com/Imran251"><i className="fa fa-github"></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.linkedin.com/in/imransyed25" ><i className="fa fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                    </div> 
                </section> 

                <section className="u-py-40 bg-navy-dark">
                    <div className="container">
                    <p className="mb-0 text-center">
                    Imran Syed | © {this.state.year} . Built with React/Redux
                    </p>
                    </div>
                </section>
            </footer>
            
		)
	}
}

export default Footer;