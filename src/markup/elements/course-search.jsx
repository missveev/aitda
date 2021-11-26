import React,{Component} from 'react';

// Images
import bg1 from '../../images/background/bg1.jpg';

class CourseSearch extends Component{
    render(){
        return(
            <>
                <div className="section-area section-sp1 ovpr-dark bg-fix online-cours" style={{backgroundImage:"url("+bg1+")"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center text-white">
                                <h2>Search all programs at AIITD</h2>
                                <h5>Own Your Feature Learning New Skills</h5>
                                <form className="cours-search">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="What do you want to learn today?"/>
                                        <div className="input-group-append">
                                            <button className="btn" type="submit">Search</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        </div>
                    </div>
            </>
        );
    }
}

export default CourseSearch;