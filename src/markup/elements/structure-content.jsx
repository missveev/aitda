import React, {Component} from 'react';
import {Link} from 'react-router-dom';


// Images
import blogPic1 from '../../images/blog/grid/pic1.jpg';
import blogPic2 from '../../images/blog/grid/pic2.jpg';
import blogPic3 from '../../images/blog/grid/pic3.jpg';

const content = [
    {
        BlogThumb: blogPic1,
        BlogTitle: "President and CEO",
        BlogText: "Gboyega Aribisogan became AITDA’s first President and CEO on August 24, 2020. An innovative leader, she brings extensive post-secondary knowledge and an entrepreneurial spirit to her role.",
    },
    {
        BlogThumb: blogPic2,
        BlogTitle: "Vice-President Academic and Provost",
        BlogText: "Sue Fitzsimmons joined AITDA’s executive team as Vice-President Academic in 2016. Her portfolio expanded in 2019 and she assumed the role of Vice-President Academic and Provost.",
    },
    {
        BlogThumb: blogPic3,
        BlogTitle: "Vice-President Administration and Chief Financial Officer",
        BlogText: "You will see in the guide all my years of valuable experience together with.",
    },
    {
        BlogThumb: blogPic1,
        BlogTitle: "Interim Vice-President, External Relations",
        BlogText: "When I needed to start from scratch and figure out how things work. Getting people.",
    },
]

class StructureContent extends Component {

    render() {
        return (
            <>
                <div className="section-area section-sp2">
                    <div className="container">
                        <h1 className="text-danger">Executives</h1>
                        <div className="row">
                            <div className="col-lg-8">
                                {content.map((item) => (
                                    <div className="blog-post blog-md clearfix">
                                        <div className="ttr-post-media">
                                            <Link to="/blog-details"><img src={item.BlogThumb} alt=""/></Link>
                                        </div>
                                        <div className="ttr-post-info">
                                            <h5 className="post-title"><Link to="/blog-details">{item.BlogTitle}</Link>
                                            </h5>
                                            <p>{item.BlogText}</p>
                                            <div className="post-extra">
                                                <Link to="/blog-details" className="btn-link">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default StructureContent;