import React from 'react';
import './SocialIcons.scss';

const SocialIcons = ({ icons }) => {
    return (
        <div className="socialIcons">
            <ul>
                {
                    icons.map(({ icon, url }) => {
                        return (
                            <li key={icon}>
                                <a href={url}
                                    arget={`${url !== "javascipt:void(0)" ? "_blank" : "_self"}`}>
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