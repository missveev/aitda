import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import aboutPic1 from "../../images/about/pic1.jpg";
import ModalVideo from "react-modal-video";

class AccreditContent extends Component{
    constructor () {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <>
                <div className="section-area bg-primary section-sp1 our-story popp">
                    <div className="container">
                        <div className="row align-items-center d-flex">
                            <div className="col-lg-5 col-md-12 text-white m-b30">
                                <div className="heading-bx style1 mb-3">
                                    <h2 className="title-head">Partners</h2>
                                    <p className="text-white">To Effectively and Efficiently Execute Our core Objectives, AITDA is to collaborates With Several Organizations Both Local And International. Such as:</p>
                                </div>
                                    <ul>International Press Institute (IPI)</ul>
                                    <ul>Nigerian Institute of Journalism (NIJ)</ul>
                                    <ul>Times Journalism Institute (TJI)</ul>
                                    <ul>National /State Board of Technical Education (NBTE)</ul>
                                    <ul>Industrial Training Fund (ITF)</ul>
                                    <ul>Center for Advocacy against Corrupt Practices (CACORP)</ul>
                                    <ul>Nigerian Institute of Management (NIM)</ul>
                                    <ul>Council For International Development (CFID)</ul>
                                    <ul>DFID PERL and USAID</ul>
                                    <ul>The British Council</ul>
                                    <ul>Citizenship and Leadership Training Center (Presidency)</ul>
                                    <ul>National Institute for Legislative Studies (Nigeria)</ul>
                                    <ul>Centre for Public Enlightenment and Communication services EKHA</ul>
                                    <ul>Centre for Women and Child Development EKHA</ul>
                            </div>
                            <div className="col-lg-7 col-md-12 heading-bx p-lr">
                                <div className="video-bx">
                                    <img src={aboutPic1} alt=""/>
                                    <Link onClick={this.openModal} to="#" className="popup-youtube video"><i className="fa fa-play"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='x_sJzVe9P_8' onClose={() => this.setState({isOpen: false})} />

            </>
        );
    }
}
export default AccreditContent;