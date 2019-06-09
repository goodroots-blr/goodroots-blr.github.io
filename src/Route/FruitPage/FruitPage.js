import React from 'react';
import {
    heroSliderData,
    companyRelatedData,
    certificatesData,
    givingBackData,
    ourProductsData,
    whyMangoData,
    ourFarmData,
    whoWeAreData
} from './../../resources/data';
import Layout from './../../Components/_UI/Layout/Layout';
import HeroSlider from './../../Components/_UI/HeroSlider/HeroSlider';
import AboutUs from './../../Components/_Section/AboutUs/AboutUs';
import WhoWeAre from './../../Components/_Section/WhoWeAre/WhoWeAre';
import WhyMango from './../../Components/_Section/WhyMango/WhyMango';
import OurFarm from './../../Components/_Section/OurFarm/OurFarm';
import OurProducts from './../../Components/_Section/OurProducts/OurProducts';
import Certificates from './../../Components/_Section/Certificates/Certificates';
import Givingback from './../../Components/_Section/Givingback/Givingback';
import './FruitPage.scss';
const FruitPage = (props) => {
    return (
        <Layout showNavigation={props.showNavigation} klassName={props.type}>
            <HeroSlider slides={heroSliderData} />
            <main>
                <AboutUs content={companyRelatedData.aboutUs} />
                <WhoWeAre data={whoWeAreData} />
                <OurFarm data={ourFarmData} />
                <WhyMango data={whyMangoData} />
                <OurProducts data={ourProductsData} isPrebook={props.isPrebook} />
                <Givingback data={givingBackData} />
                <Certificates data={certificatesData} />
            </main>
        </Layout>
    );
};


export default FruitPage;