import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import icon1 from '../../images/icon/icon1.png';
import icon2 from '../../images/icon/icon2.png';
import icon3 from '../../images/icon/icon3.png';
import icon4 from '../../images/icon/icon4.png';

const content = [
    {
        IconImg: icon1,
        Title: "How many hours per week can you spend in class?",
        Text: "Full time, part time and remote learning are available depending on the program you're in. Check your program page to make sure the option that works best for you is offered.",
    },
    {
        IconImg: icon2,
        Title: "Do you have related experience?",
        Text: "Many students come to AITD with previous learning and life experience. If you've worked in the field, have relevant experience or volunteer work, consider looking into advanced credit and recognition options.",
    },
    {
        IconImg: icon3,
        Title: "When do you want to start?",
        Text: "Are you prepared to get going next term? Or would it be better to wait until you're really ready.  Check your program page to make sure you meet all of your entrance requirements - if you need to do some upgrading, this will take more time.",
    },
    {
        IconImg: icon4,
        Title: "How quickly do you want to graduate?",
        Text: "Do you want to race to the finish or take your time so you can balance work, life and everything else. If you plan to work at the same time, make sure you set realistic expectations of how much energy you can devote to your program.",
    },
]

class ExploreContent2 extends Component{
    render(){
        return(
            <>
                <div className="section-area section-sp1">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 m-b50">
                                <div className="heading-bx left mb-3">
                                    <h2 className="title-head m-b0">Flexible programs and pathways</h2>
                                    <p className="m-b0">AITDA offers accredited indutry-relevant trainig that is designed to give you the skills and knowledge necessary to find employment and build a rewarding career, or sharpen your personal skills.</p> </div>
                                <Link to="/contact-1" className="btn button-md">Join Now</Link>
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    {content.map((item) => (
                                        <div className="col-lg-6 col-md-6 col-sm-6 m-b40">
                                            <div className="feature-container">
                                                <div className="feature-md text-white m-b20">
                                                    <Link to="#" className="icon-cell"><img src={item.IconImg} alt=""/></Link>
                                                </div>
                                                <div className="icon-content">
                                                    <h5 className="ttr-tilte">{item.Title}</h5>
                                                    <p>{item.Text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ExploreContent2;