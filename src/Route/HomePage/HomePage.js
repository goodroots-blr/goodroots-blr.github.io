import React from 'react';
import {
    heroSliderData,
    companyRelatedData,
    certificatesData,
    givingBackData,
    ourProductsData,
    footerData
} from './../../resources/data';
import HeroSlider from './../../Components/_UI/HeroSlider/HeroSlider';
import SrollToTop from './../../Components/_UI/SrollToTop/SrollToTop';
// import Header from './../../Components/_Section/Header/Header';
// import AboutUs from './../../Components/_Section/AboutUs';
// import WhoWeAre from './../../Components/_Section/WhoWeAre';
// import WhyMango from './../../Components/_Section/WhyMango';
// import OurFarm from './../../Components/_Section/OurFarm';
import OurProducts from './../../Components/_Section/OurProducts/OurProducts';
import Certificates from './../../Components/_Section/Certificates/Certificates';
import Footer from './../../Components/_Section/Footer/Footer';
import CopyrightFooter from './../../Components/_Section/CopyrightFooter/CopyrightFooter';
import './HomePage.scss'

const renderGivingBack = () => (
    <div className="givingBack">
        <div className="container">
            <h1 className="main-title">
                <strong>Giving </strong>
                back to society
                        </h1>
            <div className="content">
                <div className="left__content">
                    {
                        givingBackData.paragraphs.map((para, index) => {
                            return (
                                <p key={index}>{para}</p>
                            )
                        })
                    }
                </div>
                <div className="left__content">
                    <img src={givingBackData.img} alt={givingBackData.alt} />
                </div>
            </div>
        </div>
    </div>
)

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
            {/*  */}
            {/* 
            */}
            <main>
                <OurProducts data={ourProductsData} />
                {renderGivingBack()}
                <Certificates data={certificatesData} />
            </main>
            <Footer data={footerData} />
            <CopyrightFooter content={footerData.copyrightText()} />
            <SrollToTop />
        </div>
    );
};


export default HomePage;