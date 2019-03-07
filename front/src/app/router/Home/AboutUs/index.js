import React from 'react';

class AboutUs extends React.Component {

	state = {
		
	};

	render () {
		return (
            <section id="about">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 m-auto text-center">
                        <h2 className="h1">About CityLife </h2>
                        <div className="u-h-4 u-w-50 bg-primary rounded mt-4 u-mb-40 mx-auto"></div>
                    </div>
                    </div>
                    <div className="row align-items-center">
                    <div className="col-lg-5 text-center wow animated fadeInLeft">
                        <img className="wow fadeInLeft" src="https://placeimg.com/572/722/tech" alt=""/>
                    </div>

                    <div className="col-lg-6 ml-auto wow animated fadeInRight">
                        <p className="mb-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, cum!
                        </p>
                        <h4 className="mb-3">Lorem, ipsum.</h4>
                        <p className="mb-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, soluta sint. Aut saepe eligendi magni tenetur nisi voluptatem esse odio similique excepturi, optio, at quidem praesentium atque qui voluptate quas!
                        </p>
                        <h4 className="mb-3">Lorem ipsum dolor sit amet.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eos sunt assumenda et, esse aspernatur repellat voluptate a neque cupiditate harum? Ducimus quisquam eius obcaecati ipsum ratione itaque in, saepe natus corrupti accusamus voluptatem minus ab temporibus officia enim hic cumque nulla, facere molestias? Earum, odio voluptatibus? Praesentium, ullam eius.</p>
                    </div> 
                    </div> 
                </div>
            </section>
		)
	}
}

export default AboutUs;