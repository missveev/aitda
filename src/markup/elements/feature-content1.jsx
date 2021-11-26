import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import icon1 from '../../images/icon/icon1.png';
import icon2 from '../../images/icon/icon2.png';
import icon3 from '../../images/icon/icon3.png';
import icon4 from '../../images/icon/icon4.png';

const content = [
	{
		IconImg: icon1,
		Title: "Our Philosophy",
		Text: "To Research, Develop and Present the most qualitative leadership and management education adapted to our specific Development needs at  affordable fees.",
	},
	{
		IconImg: icon2,
		Title: "Strategic Approach",
		Text: "Vocational training, Public Lectures, Conferences (National and Regional and International), Seminars, In-plant Trainings, Workshops, Open Lifestyle Lectures and Publications.",
	},
	{
		IconImg: icon3,
		Title: "Key Of Success",
		Text: "To achieve NUMBER ONE ranking as a provider of Training in Security Entrepreneurship, Media, Communications and  Professionalism in improvement strategies. ",
	},
	{
		IconImg: icon4,
		Title: "Facilitation",
		Text: "Many of our research activities and Programmes facilitation are carried out through a network of individual researchers, practitioners and experts within and outside Nigeria, who in most cases are Professionals from different organisations and Institutions.",
	},
]

class FeatureContent1 extends Component{
	render(){
		return(
			<>
				<div className="row">
					{content.map((item) => (
						<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
							<div className="feature-container">
								<div className="feature-md text-white m-b20">
									<Link to="#" className="icon-cell"><img src={item.IconImg} alt=""/></Link> 
								</div>
								<div className="icon-content">
									<h5 className="ttr-tilte">{item.Title}</h5>
									<p>{item.Text}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</>
		);
	}
}

export default FeatureContent1;