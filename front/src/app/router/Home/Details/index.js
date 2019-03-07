import React from 'react';

class Details extends React.Component {

	state = {
		
	};

	render () {
		return (
            <section data-dark-overlay="5" className="u-py-100 u-h-100vh u-flex-center" style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh'
                }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 m-auto text-center">
                            <div className="card box-shadow-v2 bg-white u-of-hidden">
                                <h2 className="bg-primary m-0 py-3 text-white">REGISTER</h2>
                                    <div className="p-4 p-md-5">
                                        <ul className="list-inline u-my-40">
                                            <li className="mb-3">Or Sign In with</li>
                                            <li className="list-inline-item">
                                                <a href="" className="fa fa-facebook u-w-45 u-h-45 u-flex-center text-white rounded-circle bg-facebook"></a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="" className="fa fa-twitter u-w-45 u-h-45 u-flex-center text-white rounded-circle bg-twitter"></a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="" className="fa fa-google-plus u-w-45 u-h-45 u-flex-center text-white rounded-circle bg-google"></a>
                                            </li>
                                        </ul>
                                        <p>
                                            Already have an account? <a href="login.html" className="text-primary">Sign up</a>
                                        </p>
                                    </div> 
                            </div> 
                        </div>
                    </div>
                </div> 
            </section> 
		)
	}
}

export default Details;