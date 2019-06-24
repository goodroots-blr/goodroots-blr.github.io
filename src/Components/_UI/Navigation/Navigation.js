import React, { useEffect, useState } from 'react';
import './Navigation.scss';
import {
    Link,
    Events,
} from "react-scroll";
import { Link as RLink } from "react-router-dom";
import Button from './../Button/Button';
// import ProductOverlay from './../../_Section/ProductOverlay/ProductOverlay';

const navigationData = [
    {
        label: "Home",
        url: "heroSlider"
    },
    {
        label: "About us",
        url: "aboutUs",
        child: [
            {
                label: "Who we are",
                url: "whoweare",
            },
            {
                label: "Our farm",
                url: "ourFarm",
            },
            {
                label: "Why GoodRoots",
                url: "whyMango"
            }
        ]
    },
    {
        label: "Buy",
        url: "ourProducts"
    },
    {
        label: "Contact",
        url: "contactus"
    }
]




const Navigation = props => {
    useEffect(() => {
        Events.scrollEvent.register("begin", function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register("end", function () {
            console.log("end", arguments);
        });
        return () => {
            Events.scrollEvent.remove("begin");
            Events.scrollEvent.remove("end");
        }
    });

    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        document.body.classList.add('productOverlay--open');
        setToggle(true);
    }
    const hideMenu = () => {
        setToggle(false);
        document.body.classList.remove('productOverlay--open');
    }
    const renderChild = (items) => {
        return (
            <ul className="childMenu">
                {items.map((d) => {
                    return (
                        <li key={d.label}>
                            <Link
                                to={d.url}
                                spy={true}
                                offset={-100}
                                smooth={true}
                                duration={500}
                            >
                                {d.label}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        )
    }
    return (
        <nav className={`navigation ${props.toggle && "mobile-navigation"}`}>
            <ul className="parentmenu">
                {navigationData.map((d) => {
                    return (
                        <li key={d.label}>
                            <Link
                                to={d.url}
                                spy={true}
                                offset={-80}
                                smooth={true}
                                duration={500}
                            >
                                {d.label}
                            </Link>
                            {d.child && renderChild(d.child)}
                        </li>
                    )
                })}
                {/* <li>
                    <RLink className="desktopOnly cart" to='/checkout'>
                        <i className="icon-shopping-cart"></i>
                        Cart
                    </RLink>
                </li> */}
            </ul>
        </nav>
    );
};

export default Navigation;