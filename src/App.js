import React from 'react';
import {Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Markup from './markup/markup';
import Login from "./markup/pages/login";
import {Redirect, Route} from "react-router-dom";

//authentication
import {auth, createUserProfileDocument} from "./Firebase/firebase.utils";
import {setCurrentUser} from './redux/user/user.actions'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selector'

// Plugins Stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';

// Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// React Modal Video
import 'react-modal-video/css/modal-video.min.css';

// StyleSheet
import './css/typography.css';
import './css/shortcodes/shortcodes.css';
import './css/style.css';
import './css/color/color-1.css';

// Fonts
import './vendors/fontawesome/css/font-awesome.min.css';
import './vendors/flaticon/flaticon.css';
import './vendors/line-awesome/css/line-awesome.min.css';
import './vendors/themify/themify-icons.css';

class App extends React.Component {
    unsubscribeFromAuth = null

    componentDidMount() {
        const {setCurrentUser} = this.props
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {

                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    })
                })
            }
            setCurrentUser(userAuth)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {

        return (
            <div className="page-wraper">
                <Markup/>

                <Switch>
                    <Route path='/login' render={() => this.props.currentUser ? (<Redirect to='/'/>) : <Login/>}/>
                    }/>
                </Switch>

            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);