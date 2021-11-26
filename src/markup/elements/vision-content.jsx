import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import ServicePic1 from '../../images/our-services/pic1.jpg';
import ServicePic2 from '../../images/our-services/pic2.jpg';
import ServicePic3 from '../../images/our-services/pic3.jpg';

class VisionContent extends Component{
    render(){
        return(
            <>
                <div className="section-area section-sp1 service-info-bx">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 heading-bx left">
                                <h2 className="title-head">AITDA's VISION</h2>
                            </div>
                                <p>To achieve NUMBER ONE ranking as a provider of Training in Security Entrepreneurship, Media, Communications and  Professionalism in improvement strategies. </p>

                        </div>
                        <div className="row">
                            <div className="col-md-12 heading-bx left">
                                <h2 className="title-head">AITDA's PROMISES</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="service-bx m-b30">
                                    <div className="action-box">
                                        <img src={ServicePic1} alt=""/>
                                    </div>
                                    <div className="info-bx">
                                        <h4 className="m-b10"><Link to="/courses-details">Promise to Students</Link></h4>
                                        <p className="m-b20">AITDA provides a positive student experience that encompasses students’ mental, emotional and physical well-being and defines success broadly. We prepare students to succeed in meaningful careers, find employment in their chosen field and have the skills necessary to have an immediate impact. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="service-bx m-b30">
                                    <div className="action-box">
                                        <img src={ServicePic2} alt=""/>
                                    </div>
                                    <div className="info-bx">
                                        <h4 className="m-b10"><Link to="/courses-details">Promise to Staff</Link></h4>
                                        <p className="m-b20">AITDA is one of Nigeria’s outstanding places to work, which follows from a culture of how we work together. This is reflected in our values of respect, collaboration, celebration, support and accountability.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="service-bx m-b30">
                                    <div className="action-box">
                                        <img src={ServicePic3} alt=""/>
                                    </div>
                                    <div className="info-bx">
                                        <h4 className="m-b10"><Link to="/courses-details">Promise to Nigeria</Link></h4>
                                        <p className="m-b20">AITDA’s primary focus is on meeting the current and emerging needs for polytechnic education and research in Nigeria. AITDA is relevant and responsive, providing outstanding technical education. While serving the needs of Nigeria, AITDA is globally competitive and recognized.</p>
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

export default VisionContent;