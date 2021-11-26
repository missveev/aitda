import React, {Component, useEffect, useState} from 'react';
import COURSE_DATA from "../coursedata";
import {Link} from "react-router-dom";

const courses = [
    {
        id: 1,
        courseTitle: 'Introduction to Journalism and Media studies',
        credit: 3,
        lectureHour: 2,
        courseDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 2,
        courseTitle: 'News Reporting (Print)',
        credit: 3,
        lectureHour: 2,
        courseDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 3,
        courseTitle: 'History of the Nigerian Press',
        credit: 3,
        lectureHour: 2,
        courseDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 4,
        courseTitle: 'Newsman’s English (1)',
        credit: 3,
        lectureHour: 2,
        courseDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 5,
        courseTitle: 'Newspaper Laboratory',
        credit: 3,
        lectureHour: 2,
        courseDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }
]

class SojCurriculum extends Component {

    render() {
        return (
            <>
                <div className="row">
                    <h2 className="title-head">Curriculum</h2>
                    <h4 className="post-title">SEMESTER 1</h4>
                    {
                        courses.map((item) => (
                                <div key={item.id}>
                                    <h4>{item.courseTitle} </h4>

                                    <ul className="media-post">
                                        <li><Link to="/blog-details">Credit: {item.credit}</Link></li>
                                        <li><Link to="/blog-details">Lecture Hour (hrs/week): {item.lectureHour}</Link></li>
                                    </ul>
                                    <p>{item.courseDescription} </p>
                                </div>

                            )
                        )
                    }

                </div>
            </>
        );
    }
}

export default SojCurriculum;