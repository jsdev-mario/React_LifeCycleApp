import React from 'react';

class ContactUs extends React.Component {

	state = {
		
	};

	render () {
		return (
            <section id="contactus">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto text-center">
                            <h2 className="h1">
                                Contact Us Now
                            </h2>
                            <div className="u-h-4 u-w-50 bg-primary rounded mt-4 u-mb-40 mx-auto"></div>
                            <p>
                                You can contact us with anything related to our Products. We'll get in touch with you as soon as possible. 
                            </p>
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-md-7 text-center mt-5">
                            <form action="" method="POST">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control u-rounded-50 p-3 u-mb-30" placeholder="Name" required/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control u-rounded-50 p-3 u-mb-30" placeholder="Your email" required/>
                                    </div>
                                </div>
                                <textarea className="form-control u-rounded-15 p-3 u-mb-30" rows="6" placeholder="Youe text..." required></textarea>
                                <button className="btn btn-rounded btn-primary u-w-170" type="submit">Submit</button>
                            </form>
                        </div>
                        <div className="col-lg-4 ml-auto col-md-5 mt-5">
                            <h4 className="u-fs-28 mb-4">Contact Information</h4>
                            <p>
                                795 South Park Avenue, Mirpur 12 <br></br> Dhaka, Bangladesh
                            </p>
                            <p className="mb-0">
                                Phone: 
                                <strong>008. 567. 890. 634</strong>
                            </p>
                            <p>
                                Email: 
                                <a href="mailto:support@echotheme.com">
                                    <strong>support@echotheme.com</strong>
                                </a>
                            </p>
                        </div>
                    </div>
                </div> 
            </section> 
		)
	}
}

export default ContactUs;