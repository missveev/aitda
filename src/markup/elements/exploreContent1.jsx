import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Images
import icon2 from '../../images/icon/icon2.png';
import icon3 from '../../images/icon/icon3.png';
import icon4 from '../../images/icon/icon4.png';

const content = [
    {
        IconImg: icon2,
        Title: "Diplomas & Certificates",
        Text: "These credit programs take 1 or 2 years and lead to government approved and industry-recognized credentials",
    },
    {
        IconImg: icon2,
        Title: "Diplomas & Certificates",
        Text: "These credit programs take 1 or 2 years and lead to government approved and industry-recognized credentials",
    },
    {
        IconImg: icon3,
        Title: "Apprenticeship Training",
        Text: "Hands-on nd expert-led apprenticeship and industry training for skilled trades and technology professionals.",
    },
    {
        IconImg: icon4,
        Title: "Continuing Education",
        Text: "Upgrade your academic prerequisites, advance or pivo your career, or learn something new and interesting.",
    },
]

class ExploreContent1 extends Component {
    render() {
        return (
            <>
                <div className="section-area section-sp1">
                    <div className="container">
                        <div className="row align-items-center">
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
                                        <div className="post-extra">
                                            <Link to="/blog-details" className="btn button-md">Search For Program</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ExploreContent1;