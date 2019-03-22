import React from 'react';
import './SocialIcons.scss';

const data = [
    {
        icon: "facebook2",
        url: "https://www.facebook.com/GoodRoots-2170250243286571/"
    },
    {
        icon: "twitter",
        url: "https://twitter.com/GoodRoots2"
    },
    {
        icon: "instagram",
        url: "https://instagram.com/goodrootsblr?utm_source=ig_profile_share&igshid=wpdribi535v0"
    },
    {
        icon: "youtube",
        url: "https://www.youtube.com/channel/UCK-aCPecUXhplimNB8nuW5Q?view_as=subscriber"
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