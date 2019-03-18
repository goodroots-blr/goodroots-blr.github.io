import React, { useState, useEffect } from 'react';
import SrollToTopImg from './../../../resources/images/SrollToTop/SrollToTop.png';
import './SrollToTop.scss';

const SrollToTop = props => {
    const [scroll, setScroll] = useState(0);
    const getClassName = () => {
        return scroll > 100 ? "active" : ""
    }

    const scrollTop = (duration) => {
        const easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
        let start = window.scrollY || document.documentElement.scrollTop,
            currentTime = null;

        const animateScroll = function (timestamp) {
            if (!currentTime) currentTime = timestamp;
            const progress = timestamp - currentTime;
            const val = Math.max(easeInOutQuad(progress, start, -start, duration), 0);
            window.scrollTo(0, val);
            if (progress < duration) {
                window.requestAnimationFrame(animateScroll);
            }
        };

        window.requestAnimationFrame(animateScroll);
    }


    const handleClick = () => {
        scrollTop(200);
    }

    const onScrollScreen = () => {
        setScroll(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScrollScreen, false);
        return () => {
            window.removeEventListener('scroll', onScrollScreen, false);
        };
    }, [scroll]);

    return (
        <div
            role="button"
            tabIndex="0"
            onKeyDown={() => { }}
            onClick={handleClick}
            className={`srollToTop ${getClassName()}`}>
            <img src={SrollToTopImg} alt="SrollToTopImg" />
        </div>
    );
};

export default SrollToTop;