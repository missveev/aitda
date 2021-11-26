import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Schoolsidebar extends Component {
    render() {
        return (
            <>

                                <div className="widget widget_archive">
                                    <h5 className="widget-title style-1">All Courses</h5>
                                    <ul>
                                        <li className="active"><Link to="#">Description</Link></li>
                                        <li><Link to="/courses-details">Curriculum</Link></li>
                                        <li><Link to="/courses-details">Academic Staff</Link></li>
                                        <li><Link to="/courses-details">Admission</Link></li>
                                        <li><Link to="/courses-details">Tuition Fees</Link></li>
                                        <li><Link to="/courses-details">Apply Online</Link></li>
                                    </ul>
                                </div>

            </>
        );
    }
}

export default Schoolsidebar;