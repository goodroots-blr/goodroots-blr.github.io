import React, { useEffect, useState } from 'react';
import Logo from './images/logo.jpg';
import Navigation from './../../_UI/Navigation/Navigation';
import Hamburger from './../../_UI/Hamburger/Hamburger';
import SocialIcons from './../../_UI/SocialIcons/SocialIcons';
import { Link as RLink } from "react-router-dom";
import './Header.scss';

const Header = ({ data, showNavigation }) => {
    const [scroll, setScroll] = useState(0);
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
    }

    const onResizeScreen = () => {
        document.body.classList.remove('nav--open');
    }

    const onScrollScreen = () => {
        setToggle(false)
        setScroll(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('resize', onResizeScreen, false);
        window.addEventListener("scroll", onScrollScreen, false);
        return () => {
            window.removeEventListener("scroll", onScrollScreen, false);
            window.removeEventListener('resize', onResizeScreen, false);
        };
    }, [scroll, toggle]);

    const getClassName = () => {
        return scroll ? "isFixed" : ""
    }
    return (
        <header className={`${getClassName()}`}>
            <div className="subheader">
                <div className="container">
                    <div className="subheader-content">
                        <div className="top-contact">
                            <a href={`mailto:${data.email}?Subject=Hello%20GoodRoots`}>
                                <i className={`icon-envelop`} /> {data.email}
                            </a>
                            <a href={`tel:${data.contactNumber}`}>
                                <i className={`icon-mobile`} /> {data.contactNumber}
                            </a>
                        </div>
                        <SocialIcons icons={data.socialIcons} />
                    </div>
                </div>
            </div>
            <div className="container header-content">
                {showNavigation && <Hamburger toggle={toggle} onClick={handleClick} />}
                <a href="/">
                    <img className="logo" src={Logo} alt="GoodRoots" />
                </a>
                <RLink className="mobileOnly cart" to='/checkout'>
                    <i className="icon-shopping-cart"></i>
                    <span>cart</span>
                </RLink>
                {showNavigation && <Navigation toggle={toggle} />}
            </div>
        </header>
    );
};

export default Header;