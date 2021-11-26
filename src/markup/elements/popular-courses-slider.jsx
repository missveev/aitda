import React,{Component} from 'react'; 
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Images
import coursesPic1 from '../../images/courses/pic1.jpg';
import coursesPic2 from '../../images/courses/pic2.jpg';
import coursesPic3 from '../../images/courses/pic3.jpg';
import coursesPic4 from '../../images/courses/pic4.jpg';

// Content
const content = [
	{ 
		thumb: coursesPic1,
		title: "Introduction to Journalism and Media studies",
		tag: "Journalism",
		review: 3,
		priceDel: 12,
		price: 19,
	},
	{ 
		thumb: coursesPic2,
		title: "News Reporting (Print)",
		tag: "Journalism",
		review: 4,
		priceDel: 18,
		price: 15,
	},
	{ 
		thumb: coursesPic3,
		title: "Online Publishing",
		tag: "Journalism",
		review: 2,
		priceDel: 52,
		price: 23,
	},
	{ 
		thumb: coursesPic4,
		title: "Radio/TV Production",
		tag: "Media",
		review: 3,
		priceDel: 32,
		price: 26,
	},
	{ 
		thumb: coursesPic1,
		title: "Principle of Broadcast Media",
		tag: "Media",
		review: 4,
		priceDel: 12,
		price: 26,
	},
	{ 
		thumb: coursesPic2,
		title: "Media Ethics",
		tag: "Media",
		review: 1,
		priceDel: 14,
		price: 24,
	},
]

class PopularCoursesSlider extends Component{
	render(){
		
		const settings = {
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 360,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};
		
		return(
			<>
				<div className="section-area section-sp1 bg-gray popular-courses-bx">
					<div className="container">
						<div className="row">
							<div className="col-md-12 heading-bx left">
								<h2 className="title-head">Popular <span>Courses</span></h2>
								<p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
							</div>
						</div>
						<Slider {...settings} className="courses-carousel slick-slider owl-btn-1">
							{content.map((item)=>(
								<div className="slider-item">
									<div className="cours-bx">
										<div className="action-box">
											<img src={item.thumb} alt=""/>
											<Link to="/courses-details" className="btn">Read More</Link>
										</div>
										<div className="info-bx">
											<span>{item.tag}</span>
											<h6><Link to="/courses-details">{item.title}</Link></h6>
										</div>
										<div className="cours-more-info">
											<div className="review">
												<span>{item.review} Review</span>
												<ul className="cours-star">
													<li className="active"><i className="fa fa-star"></i></li>
													<li className="active"><i className="fa fa-star"></i></li>
													<li className="active"><i className="fa fa-star"></i></li>
													<li><i className="fa fa-star"></i></li>
													<li><i className="fa fa-star"></i></li>
												</ul>
											</div>
											<div className="price">
												<del>${item.priceDel}</del>
												<h5>${item.price}</h5>
											</div>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</>
		);
	}
}

export default PopularCoursesSlider;