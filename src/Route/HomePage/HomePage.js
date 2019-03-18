import React from 'react';
import {
    heroSliderData,
    companyRelatedData,
    certificatesData,
    footerData
} from './../../resources/data';
import HeroSlider from './../../Components/_UI/HeroSlider/HeroSlider';
import SrollToTop from './../../Components/_UI/SrollToTop/SrollToTop';
// import Header from './../../Components/_Section/Header/Header';
// import AboutUs from './../../Components/_Section/AboutUs';
// import WhoWeAre from './../../Components/_Section/WhoWeAre';
// import WhyMango from './../../Components/_Section/WhyMango';
// import OurFarm from './../../Components/_Section/OurFarm';
// import givinbackImg from './../../resources/images/givinback.jpg';
// // import OurProducts from './../OurProducts';
import Certificates from './../../Components/_Section/Certificates/Certificates';
import Footer from './../../Components/_Section/Footer/Footer';
import CopyrightFooter from './../../Components/_Section/CopyrightFooter/CopyrightFooter';
import './HomePage.scss'

const HomePage = () => {
    return (
        <div className="app">
            {/* <Header /> */}
            <HeroSlider slides={heroSliderData} />
            {/*
                <AboutUs />
                <WhoWeAre />
                <OurFarm />
                <WhyMango /> */}
            {/* <OurProducts /> */}
            {/* <div className="givingBack">
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
                                    Institution for the Aged  – TARA in Rajarajeshwari Nagar
                                    which is run by the bangalore freemason’s society.
                                </p>
                            </div>
                            <div className="left__content">
                                <img src={givinbackImg} alt="Giving back to society" />
                            </div>
                        </div>
                    </div>
                </div>
            */}
            <main>
            <Certificates data={certificatesData} />
            </main>
            <Footer data={footerData} />
            <CopyrightFooter content={footerData.copyrightText()} />
            <SrollToTop />
        </div>
    );
};


export default HomePage;