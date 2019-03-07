import React from 'react';

class ProjectManage extends React.Component {

	state = {
		
	};

	render () {
		return (
            <section className="pb-0">
                <div className="container">
                
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center">
                        <h2 className="h1">
                            Everything You Need to <br></br> Manage Your Projects
                        </h2>
                        <div className="u-h-4 u-w-50 bg-primary rounded mt-4 u-mb-40 mx-auto"></div>
                        <p className="u-mt-60">
                                Nam liber tempor cum soluta nobis eleifend option congue is nihil imper is per tem por legere me that doming vulputate velit esse molestie possim. wisi enim ad placerat facer possim assum minim there veniam, nostrud exerci tation ullamcorper quis nostrud exerci tation ullamcorper. Nam is tempor cum soluta nobis eleifend option congue is nihil imper.
                        </p>
                        <div className="row">
                            <div className="col-md-4 mt-5">
                                <h4 className="u-fs-48 u-fw-400 text-primary mb-0">160+</h4>
                                <p className="u-fs-20 u-ff-dosis">Countries</p>
                            </div> 
                            <div className="col-md-4 mt-5">
                                <h4 className="u-fs-48 u-fw-400 text-primary mb-0">70k</h4>
                                <p className="u-fs-20 u-ff-dosis">Paid Users</p>
                            </div> 
                            <div className="col-md-4 mt-5">
                                <h4 className="u-fs-48 u-fw-400 text-primary mb-0">98k</h4>
                                <p className="u-fs-20 u-ff-dosis">Active Install</p>
                            </div> 
                        </div> 
                        </div> 
                        
                        <div className="col-12 u-mt-80">
                            <img src="https://placeimg.com/1254/412/nature" alt=""/>
                        </div>
                    </div> 
                </div> 
            </section> 
		)
	}
}

export default ProjectManage;