import React, {Component} from 'react';

// Layout
import Header from "../layout/header/header1";
import Footer from "../layout/footer/footer1";

// Elements
import bannerImg from "../../images/banner/banner2.jpg";
import {Link} from "react-router-dom";
import Schoolsidebar from "../elements/schools/schoolsidebar";
import Soj from "../elements/schools/soj/aboutsoj";
import SojCurriculum from "../elements/schools/soj/curriculum";

class schools extends Component {

    render() {
        return (
            <>

                <Header/>

                <div className="page-content">

                    <div className="page-banner ovbl-dark" style={{backgroundImage: "url(" + bannerImg + ")"}}>
                        <div className="container">
                            <div className="page-banner-entry">
                                <h1 className="text-white">Degrees &amp; Programs</h1>
                            </div>
                        </div>
                    </div>
                    <div className="breadcrumb-row">
                        <div className="container">
                            <ul className="list-inline">
                                <li><Link to="/">Home</Link></li>
                                <li>Degrees &amp; Programs</li>
                                <li>schools</li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-block">
                        <div className="section-area section-sp1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-4 col-sm-12">
                                        <Schoolsidebar/>
                                    </div>
                                        <div className="col-lg-9 col-md-8 col-sm-12">
                                            <Soj/>
                                            <SojCurriculum/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <Footer/>

                </>
                );
                }
                }

                export default schools;