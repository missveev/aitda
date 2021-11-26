import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {auth, createUserProfileDocument} from "../../Firebase/firebase.utils";
// Images
import logoWhite2 from '../../images/logo-white-2.png';
import bannerImg from '../../images/background/bg2.jpg';

class Register extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password} = this.state;

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: ''
            });

        } catch (error) {
            console.error(error);
        }
    };
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    render() {
        const {displayName, email, password} = this.state;
        return (
            <>
                <div className="account-form">
                    <div className="account-head" style={{backgroundImage: "url(" + bannerImg + ")"}}>
                        <Link to="/"><img src={logoWhite2} alt=""/></Link>
                    </div>
                    <div className="account-form-inner">
                        <div className="account-container">
                            <div className="heading-bx left">
                                <h2 className="title-head">Sign Up <span>Now</span></h2>
                                <p>Login Your Account <Link to="/login">Click here</Link></p>
                            </div>
                            <form className="contact-bx" onSubmit={this.handleSubmit}>
                                <div className="row placeani">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input name="displayName" type="text" value={displayName}
                                                       onChange={this.handleChange} placeholder="Your Name" required=""
                                                       className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input name="email"
                                                       type="email"
                                                       value={email}
                                                       onChange={this.handleChange}
                                                       placeholder="Your Email Address"
                                                       required=""
                                                       className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input name="password"
                                                       type="password"
                                                       value={password}
                                                       onChange={this.handleChange}
                                                       placeholder="Your Password"
                                                       className="form-control"
                                                       required=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 m-b30">
                                        <button name="submit"
                                                type="submit"
                                                value="Submit"
                                                className="btn button-md">Sign Up
                                        </button>
                                    </div>
                                    <div className="col-lg-12">
                                        <h6 className="m-b15">Sign Up with Social media</h6>
                                        <Link className="btn flex-fill m-r10 facebook" to="#"><i
                                            className="fa fa-facebook"></i>Facebook</Link>
                                        <Link className="btn flex-fill m-l5 google-plus" to="#"><i
                                            className="fa fa-google-plus"></i>Google Plus</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Register;