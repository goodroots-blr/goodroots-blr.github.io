import React from 'react';
import {
    heroSliderData,
    companyRelatedData,
    certificatesData,
    givingBackData,
    ourProductsData,
    whyMangoData,
    ourFarmData,
    whoWeAreData,
    footerData
} from './../../resources/data';
import HeroSlider from './../../Components/_UI/HeroSlider/HeroSlider';
import SrollToTop from './../../Components/_UI/SrollToTop/SrollToTop';
import Header from './../../Components/_Section/Header/Header';
import AboutUs from './../../Components/_Section/AboutUs/AboutUs';
import WhoWeAre from './../../Components/_Section/WhoWeAre/WhoWeAre';
import WhyMango from './../../Components/_Section/WhyMango/WhyMango';
import OurFarm from './../../Components/_Section/OurFarm/OurFarm';
import OurProducts from './../../Components/_Section/OurProducts/OurProducts';
import Certificates from './../../Components/_Section/Certificates/Certificates';
import Givingback from './../../Components/_Section/Givingback/Givingback';
import Footer from './../../Components/_Section/Footer/Footer';
import CopyrightFooter from './../../Components/_Section/CopyrightFooter/CopyrightFooter';
import './HomePage.scss';

const HomePage = () => {
    return (
        <div className="app">
            <Header data={companyRelatedData} />
            <HeroSlider slides={heroSliderData} />
            <main>
                <AboutUs content={companyRelatedData.aboutUs} />
                <WhoWeAre data={whoWeAreData} />
                <OurFarm data={ourFarmData} />
                <WhyMango data={whyMangoData} />
                <OurProducts data={ourProductsData} />
                {<Givingback data={givingBackData}/>}
                <Certificates data={certificatesData} />
            </main>
            <Footer data={footerData} />
            <CopyrightFooter content={footerData.copyrightText()} />
            <SrollToTop />
        </div>
    );
};


export default HomePage;