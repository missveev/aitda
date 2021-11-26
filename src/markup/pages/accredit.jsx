import React, {Component} from 'react';

// Layout
import Header from "../layout/header/header1";
import Footer from "../layout/footer/footer1";

// Elements

import bannerImg from "../../images/banner/banner2.jpg";
import {Link} from "react-router-dom";
import AccreditContent from "../elements/accredit-content";

class accredit extends Component{

    render(){
        return (
            <>

                <Header />

                <div className="page-content">

                    <div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bannerImg+")"}}>
                        <div className="container">
                            <div className="page-banner-entry">
                                <h1 className="text-white">Networking and Affiliation</h1>
                            </div>
                        </div>
                    </div>
                    <div className="breadcrumb-row">
                        <div className="container">
                            <ul className="list-inline">
                                <li><Link to="/">Home</Link></li>
                                <li>About Us</li>
                                <li>Networking and Affiliation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-block">

                       <AccreditContent/>

                    </div>
                </div>
                <Footer/>

            </>
        );
    }
}

export default accredit;