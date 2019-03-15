import React from 'react';
import './SocialIcons.scss';

const data = [
    {
        icon: "facebook2",
        url: "https://www.facebook.com/GoodRoots-2170250243286571/"
    },
    {
        icon: "twitter",
        url: "javascipt:void(0)"
    },
    {
        icon: "instagram",
        url: "javascipt:void(0)"
    },
    {
        icon: "youtube",
        url: "javascipt:void(0)"
    }
]

const SocialIcons = props => {
    return (
        <div className="socialIcons">
            <ul>
                {
                    data.map(({ icon, url }) => {
                        return (
                            <li key={icon}>
                                <a href={url} target={`${url !== "javascipt:void(0)" ? "_blank" : "_self"}`}>
                                    <i className={`icon-${icon}`} />
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default SocialIcons;