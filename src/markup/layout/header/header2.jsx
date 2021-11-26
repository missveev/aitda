import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';

// Images
import logo from '../../../images/mylogo.png'
import logoWhite from '../../../images/mylogo.png';
import adv from '../../../images/adv/adv.jpg';

class Header extends Component{

	componentDidMount() {

		// Search Form Popup
		var searchBtn = document.getElementById("quik-search-btn")
        var searchForm = document.querySelector(".nav-search-bar")
        var closeBtn = document.getElementById("search-remove")

        searchBtn.addEventListener('click',function(){
            searchForm.classList.add("show")
        })

        closeBtn.addEventListener('click',function(){
            searchForm.classList.remove("show")
        })

        // Mobile Menu sidebar function
        var btn = document.querySelector('.menuicon');
        var nav = document.querySelector('.menu-links');

        function toggleFunc() {
            btn.classList.toggle("open");
            nav.classList.toggle("show");
        }

        btn.addEventListener('click', toggleFunc);

        // Mobile Submenu open close function
        var navMenu = [].slice.call(document.querySelectorAll('.menu-links > ul > li'));
        for (var y = 0; y < navMenu.length; y++) {
            navMenu[y].addEventListener('click', function () { menuClick(this) });
        }

        function menuClick(current) {
            const active = current.classList.contains("open")
            navMenu.forEach(el => el.classList.remove('open'));

            if(active){
                current.classList.remove('open')
                console.log("active")
            } else{
                current.classList.add('open');
                console.log("close")
            }
        }

    }

	render(){
		return(
			<>
				<header className="header rs-nav header-transparent">
					<div className="top-bar">
						<div className="container">
							<div className="row d-flex justify-content-between">
								<div className="topbar-left">
									<ul>
										<li><Link to="/faq-1"><i className="fa fa-question-circle"></i>Ask a Question</Link></li>
										<li><Link to="#"><i className="fa fa-envelope-o"></i>Support@website.com</Link></li>
									</ul>
								</div>
								<div className="topbar-right">
									<ul>
										<li>
											<select className="header-lang-bx">
												<option data-icon="flag flag-uk">English UK</option>
												<option data-icon="flag flag-us">English US</option>
											</select>
										</li>
										<li><Link to="/login">Login</Link></li>
										<li><Link to="/register">Register</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<Sticky enabled={true} className="sticky-header navbar-expand-lg">
						<div className="menu-bar clearfix">
							<div className="container clearfix">
								{/* <!-- Header Logo ==== --> */}
								<div className="menu-logo">
									<Link to="/"><img src={logoWhite} alt=""/></Link>
								</div>
								{/* <!-- Mobile Nav Button ==== --> */}
								<button className="navbar-toggler collapsed menuicon justify-content-end" type="button" data-toggle="collapse" data-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
									<span></span>
									<span></span>
									<span></span>
								</button>
								{/* <!-- Author Nav ==== --> */}
								<div className="secondary-menu">
									<div className="secondary-inner">
										<ul>
											<li><Link to="#" className="btn-link"><i className="fa fa-facebook"></i></Link></li>
											<li><Link to="#" className="btn-link"><i className="fa fa-google-plus"></i></Link></li>
											<li><Link to="#" className="btn-link"><i className="fa fa-linkedin"></i></Link></li>
											{/* <!-- Search Button ==== --> */}
											<li className="search-btn"><button id="quik-search-btn" type="button" className="btn-link"><i className="fa fa-search"></i></button></li>
										</ul>
									</div>
								</div>
								{/* <!-- Navigation Menu ==== --> */}
								<div className="menu-links navbar-collapse collapse justify-content-start" id="menuDropdown">
									<div className="menu-logo">
										<Link to="/"><img src={logo} alt=""/></Link>
									</div>
									<ul className="nav navbar-nav">
										<li><Link to="#">About AITDA <i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li><Link to="/about-1">About AITDA</Link></li>
                                                <li><Link to="/">AITDA History</Link></li>
												<li><Link to="/vision">Our Vision &amp; Promises</Link></li>
                                                <li><Link to="/accredit">Networks &amp; Affiliations</Link></li>
												<li><Link to="/corporate-structure">Corporate Structure</Link></li>
                                                <li><Link to="/portfolio">Our Campus</Link></li>
                                                <li><Link to="/event">Dates &amp; Events</Link></li>
                                                <li><Link to="/event">Newsroom</Link></li>
											</ul>
										</li>
										<li><Link to="#">Degrees &amp; Programs <i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li><Link to="/courses-search">Search for Programs</Link></li>
												<li><Link to="/explore">Explore your Options</Link></li>
												<li><Link to="/schools">School of Journalism</Link></li>
												<li><Link to="/faq-2">School of Computing</Link></li>
												<li><Link to="/portfolio">School of Entrepreneurship</Link></li>
												<li><Link to="/error-404">404 Page</Link></li>
											</ul>
										</li>
										<li><Link to="#">Admissions<i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li><Link to="/event">Admission Requirements</Link></li>
												<li><Link to="/events-details">Accreditation</Link></li>
                                                <li><Link to="/event">Academic Dates &amp; Deadlines</Link></li>
                                                <li><Link to="/events-details">Applying to AITDA</Link></li>
                                                <li><Link to="/event">Tuition &amp; Fees</Link></li>
											</ul>
										</li>
										<li className="add-mega-menu"><Link to="#">Courses <i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu add-menu">
												<li className="add-menu-left">
													<h5 className="menu-adv-title">Our Courses</h5>
													<ul>
														<li><Link to="/courses">Courses </Link></li>
														<li><Link to="/courses-details">Courses Details</Link></li>
														<li><Link to="/profile">Instructor Profile</Link></li>
														<li><Link to="/event">Upcoming Event</Link></li>
														<li><Link to="/membership">Membership</Link></li>
													</ul>
												</li>
												<li className="add-menu-right">
													<img src={adv} alt=""/>
												</li>
											</ul>
										</li>
										<li><Link to="/blog-classic-sidebar">Our Blog</Link>
										</li>
										<li><Link to="/contact-1">Contact Us </Link>
										</li>
									</ul>
									<div className="nav-social-link">
										<Link to="#"><i className="fa fa-facebook"></i></Link>
										<Link to="#"><i className="fa fa-google-plus"></i></Link>
										<Link to="#"><i className="fa fa-linkedin"></i></Link>
									</div>
								</div>
								{/* <!-- Navigation Menu END ==== --> */}
							</div>
						</div>
					</Sticky>
					{/* <!-- Search Box ==== --> */}
					<div className="nav-search-bar">
						<form action="#">
							<input name="search" type="text" className="form-control" placeholder="Type to search"/>
							<span><i className="ti-search"></i></span>
						</form>
						<span id="search-remove"><i className="ti-close"></i></span>
					</div>
				</header>
			</>
		);
	}
}

export default Header;
