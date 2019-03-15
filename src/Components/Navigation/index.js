import React, { useEffect, useState } from 'react';
import './Navigation.scss';
import {
    Link,
    Events,
} from "react-scroll";
import Button from './../Button';
import ProductOverlay from './../ProductOverlay';

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
                label: "Why Mango",
                url: "whyMango"
            }
        ]
    },
    {
        label: "Contact",
        url: "contactus"
    }
]

// {
//     label: "Buy",
//     url: "ourProducts"
// },
// {
//     label: "Gift",
//     url: ""
// }



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
            </ul>
            <div className="prebook">
                <Button title="Prebook now" type="inverse" onClick={handleClick} />
                {toggle && <ProductOverlay hideMenu={hideMenu} />}
            </div>
        </nav>
    );
};

export default Navigation;