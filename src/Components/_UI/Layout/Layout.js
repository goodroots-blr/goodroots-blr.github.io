import React from 'react';
import {
    companyRelatedData,
    footerData
} from './../../../resources/data';
import SrollToTop from './../SrollToTop/SrollToTop';
import Header from './../../_Section/Header/Header';
import Footer from './../../_Section/Footer/Footer';
import CopyrightFooter from './../../_Section/CopyrightFooter/CopyrightFooter';

const Layout = ({ children, showNavigation = false, klassName }) => {
    return (
        <div className={klassName}>
            <Header data={companyRelatedData} showNavigation={showNavigation} />
            <div className="bodyarera">
                {children}
            </div>
            <Footer data={footerData} />
            <CopyrightFooter content={footerData.copyrightText()} />
            <SrollToTop />
        </div>
    );
};

export default Layout;