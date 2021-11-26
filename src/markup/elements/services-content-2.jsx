import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import ServicePic1 from '../../images/our-services/pic1.jpg';
import ServicePic2 from '../../images/our-services/pic2.jpg';
import ServicePic3 from '../../images/our-services/pic3.jpg';

class ServicesContent2 extends Component{
	render(){
		return(
			<>
				<div className="section-area section-sp1 service-info-bx">
					<div className="container">
						<div className="row">
							<div className="col-md-12 heading-bx left">
								<h2 className="title-head">Why Choose <span> Our Institution</span></h2>
								<p>It’s a human capital development organization dedicated to providing practical solutions to complex development needs by involving high caliber professionals from all sectors, who are continually committed to the search for improve strategies and implementation of global best practices.</p>
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="service-bx m-b30">
									<div className="action-box">
										<img src={ServicePic1} alt=""/>
									</div>
									<div className="info-bx">
										<h4 className="m-b10"><Link to="/courses-details">Best Industry Leaders</Link></h4>
										<p className="m-b20">The Centre was established to prepare young people for Leadership roles in Community Development, Security, Politics, Media, Governance, Entrepreneurship and Health.</p>
										<Link to="/courses-details" className="btn radius-xl">View More</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="service-bx m-b30">
									<div className="action-box">
										<img src={ServicePic2} alt=""/>
									</div>
									<div className="info-bx">
										<h4 className="m-b10"><Link to="/courses-details">Learn Courses Online</Link></h4>
										<p className="m-b20">The College  awards Certificate, Diploma, Advanced  Diploma and post-Graduate Diploma to deserving students of the College.</p>
										<Link to="/courses-details" className="btn radius-xl">View More</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="service-bx m-b30">
									<div className="action-box">
										<img src={ServicePic3} alt=""/>
									</div>
									<div className="info-bx">
										<h4 className="m-b10"><Link to="/courses-details">Qualification For Membership</Link></h4>
										<p className="m-b20">Individuals who currently occupy Supervisory, Managerial or Leadership positions in the public or private sector, acadamia or armed forces are admitted to membership of the Academy.</p>
										<Link to="/courses-details" className="btn radius-xl">View More</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default ServicesContent2;