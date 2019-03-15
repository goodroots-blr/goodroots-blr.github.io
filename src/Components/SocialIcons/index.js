import React from 'react';
import './SocialIcons.scss';

const data = [
    {
        icon: "facebook2",
        url: "#"
    },
    {
        icon: "twitter",
        url: "#"
    },
    {
        icon: "instagram",
        url: "#"
    },
    {
        icon: "youtube",
        url: "#"
    }
]

const SocialIcons = props => {
    return (
        <div className="socialIcons">
            <ul>
                {
                    data.map(({icon, url}) => {
                        return (
                            <li key={icon}>
                                <a href={url}>
                                    <i className={`icon-${icon}`}/>
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