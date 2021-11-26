import React, {Component} from 'react';

// Layout
import Header from "../layout/header/header1";
import Footer from "../layout/footer/footer1";

// Elements
import {Link} from "react-router-dom";
import CourseSearch from "../elements/course-search";

class coursesearch extends Component{

    render(){
        return (
            <>

                <Header />

                <div className="page-content">
                    <div className="breadcrumb-row">
                        <div className="container">
                            <ul className="list-inline">
                                <li><Link to="/">Home</Link></li>
                                <li>Degrees &amp; Program</li>
                                <li>Search For Programs</li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-block">
                        <CourseSearch/>

                    </div>

                </div>

                <Footer/>

            </>
        );
    }
}

export default coursesearch;