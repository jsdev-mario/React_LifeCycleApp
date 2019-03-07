import React from 'react';
import $ from 'jquery';

class ClientReviews extends React.Component {

	state = {
		
    };
    
    componentDidMount(){
        window.fury.init();
    }

	render () {
		return (
            <section id="reviews">  
                <hr/>
                <div className="container">
                
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                        <h2 className="h1" id="title">
                            What They Said
                        </h2>
                        <div className="u-h-4 u-w-50 bg-primary rounded mt-4 u-mb-40 mx-auto"></div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-12 u-mt-60 text-center">
                            <div data-init="carousel" data-slick='{
                                "slidesToShow":2,
                                "slidesToScroll": 1,
                                "arrows":true,
                                "prevArrow":"<div class=\"slick-prev box-shadow-v1\"><i class=\"fa fa-angle-left\"></i></div>",
                                "nextArrow":"<div class=\"slick-next box-shadow-v1\"><i class=\"fa fa-angle-right\"></i></div>",
                                "responsive": [
                                        { 
                                            "breakpoint":1024,
                                            "settings":{
                                                "slidesToShow": 2,
                                                "arrows":false,
                                                "dots":true 
                                            }
                                        },
                                        { 
                                            "breakpoint":600,
                                            "settings":{
                                                "slidesToShow": 1,
                                                "arrows":false,
                                                "dots":true 
                                            }
                                        }						
                                    ]
                                }'
                                data-slick-margin="15">
                            
                                <div className="p-5 rounded bg-white">
                                    <img className="rounded-circle u-w-90 mx-auto mb-4" src="https://placeimg.com/100/100/people" alt=""/>
                                    <h4>
                                        Kenelia Deshmukh
                                    </h4>
                                    <p className="text-muted">
                                        Creative Director
                                    </p>
                                    <p>
                                        Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestie possim. Ut wisi enim ad placerat facer.
                                    </p>
                                </div>
                                
                                <div className="p-5 rounded bg-white">
                                    <img className="rounded-circle u-w-90 mx-auto mb-4" src="https://placeimg.com/100/100/people" alt=""/>
                                    <h4>
                                        Dorian Black
                                    </h4>
                                    <p className="text-muted">
                                        Director
                                    </p>
                                    <p>
                                        Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestie possim. Ut wisi enim ad placerat facer.
                                    </p>
                                </div>                                
                                
                                <div className="p-5 rounded bg-white">
                                    <img className="rounded-circle u-w-90 mx-auto mb-4" src="https://placeimg.com/100/100/people" alt=""/>
                                    <h4>
                                        David Case
                                    </h4>
                                    <p className="text-muted">
                                        Designer
                                    </p>
                                    <p>
                                        Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestie possim. Ut wisi enim ad placerat facer.
                                    </p>
                                </div>
                                
                                <div className="p-5 rounded bg-white">
                                    <img className="rounded-circle u-w-90 mx-auto mb-4" src="https://placeimg.com/100/100/people" alt=""/>
                                    <h4>
                                        Kenelia Deshmukh
                                    </h4>
                                    <p className="text-muted">
                                        Creative Director
                                    </p>
                                    <p>
                                        Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestie possim. Ut wisi enim ad placerat facer.
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

export default ClientReviews;