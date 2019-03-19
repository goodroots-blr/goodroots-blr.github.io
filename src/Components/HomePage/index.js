import React, { useState } from 'react';
import HeroSlider from './../HeroSlider';
import Header from './../Header';
import AboutUs from './../AboutUs';
import WhoWeAre from './../WhoWeAre';
import WhyMango from './../WhyMango';
import OurFarm from './../OurFarm';
import Button from './../Button'
import ProductOverlay from './../ProductOverlay'
import givinbackImg from './../../resources/images/givinback.jpg';
// import OurProducts from './../OurProducts';
import Certificates from './../Certificates';
import SrollToTop from './../SrollToTop';
import Footer from './../Footer';
import CopyrightFooter from './../CopyrightFooter';
import './HomePage.scss'

const HomePage = props => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        document.body.classList.add('productOverlay--open');
        setToggle(true);
    }
    const hideMenu = () => {
        setToggle(false);
        document.body.classList.remove('productOverlay--open');
    }
    return (
        <div className="app">
            <Header />
            <HeroSlider />
            <main>
                <AboutUs />
                <WhoWeAre />
                <OurFarm />
                <WhyMango />
                {/* <OurProducts /> */}
                <div className="givingBack">
                    <div className="container">
                        <h1 className="main-title">
                            <strong>Giving </strong>
                            back to society
                        </h1>
                        <div className="content">
                            <div className="left__content">
                                <p>
                                    Feel proud when you buy a mango
                                    from us because you are helping in contributing to an
                                    Institution for the Aged  – <strong>TARA</strong> in Rajarajeshwari Nagar
                                    which is run by the bangalore freemason’s society.
                                </p>
                            </div>
                            <div className="left__content">
                                <img src={givinbackImg} alt="Giving back to society" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-prebook mobileOnly">
                    <div className="container">
                        <p>
                            You can prebook your mangoes today
                        </p>
                        <Button title="Prebook now"
                            type="hero"
                            inverse
                            onClick={handleClick} />
                        {toggle && <ProductOverlay hideMenu={hideMenu} />}
                    </div>
                </div>
                <Certificates />
            </main>
            <Footer />
            <CopyrightFooter />
            <SrollToTop />
        </div>
    );
};


export default HomePage;