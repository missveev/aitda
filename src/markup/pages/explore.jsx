import React, {Component} from 'react';

// Layout
import Header from "../layout/header/header1";
import Footer from "../layout/footer/footer1";

// Elements
import bannerImg from "../../images/banner/banner2.jpg";
import {Link} from "react-router-dom";
import ExploreContent1 from "../elements/exploreContent1";
import ExploreContent2 from "../elements/exploreContent2";

class explore extends Component{

    render(){
        return (
            <>

                <Header />

                <div className="page-content">

                    <div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bannerImg+")"}}>
                        <div className="container">
                            <div className="page-banner-entry">
                                <h1 className="text-white">Explore your options</h1>
                            </div>
                        </div>
                    </div>
                    <div className="breadcrumb-row">
                        <div className="container">
                            <ul className="list-inline">
                                <li><Link to="/">Home</Link></li>
                                <li>Degrees &amp; Programs</li>
                                <li>Explore your options</li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-block">

                        <ExploreContent1/>
                        <ExploreContent2/>

                    </div>

                </div>

                <Footer/>

            </>
        );
    }
}

export default explore;