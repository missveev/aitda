import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video'

// Images
import aboutPic1 from '../../../images/about/pic1.jpg';

class OurStory1 extends Component{
	
	constructor () {
		super()
		this.state = {
			isOpen: false
		}
		this.openModal = this.openModal.bind(this)
	}
	openModal () {
		this.setState({isOpen: true})
	}
	
	render(){
		return(
			<>
				<div className="section-area bg-gray section-sp1 our-story">
					<div className="container">
						<div className="row align-items-center d-flex">
							<div className="col-lg-5 col-md-12 m-b30">
								<div className="heading-bx left mb-3">
									<h2 className="title-head">Our <span>Story</span></h2>
									<p>Africanvoice International Training and Development Academy, is an International multi-disciplinary  Institution  offering consulting services and training in Journalism and New  Media, Entrepreneurship! It also offers advisory services, educational events, printing and Publishing of Journals on Leadership, Development and Governance. </p>
								</div>
								<p className="m-b30">It’s a human capital development organization dedicated to providing practical solutions to complex development needs by involving high caliber professionals from all sectors, who are continually committed to the search for improve strategies and implementation of global best practices.
									With over 10 years operational experience,  AITA had its expanded  professional intelligence and built up a solid base, alliances and affiliations aimed at achieving number one ranking as  providers of affordable Executive and Students’ Training, adapted to our specific needs as a developing nation operating in a global economy.
								</p>
								<Link to="/blog-details" className="btn">Read More</Link>
							</div>
							<div className="col-lg-7 col-md-12 heading-bx p-lr">
								<div className="video-bx">
									<img src={aboutPic1} alt=""/>
									<Link onClick={this.openModal} to="#" className="popup-youtube video"><i className="fa fa-play"></i></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='x_sJzVe9P_8' onClose={() => this.setState({isOpen: false})} />
				
			</>
		);
	}
}

export default OurStory1;