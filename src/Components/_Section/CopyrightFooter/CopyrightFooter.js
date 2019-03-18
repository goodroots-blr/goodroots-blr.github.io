import React from 'react';
import './CopyrightFooter.scss';

const CopyrightFooter = props => {
    return (
        <div className="copyrightFooter">
            <div className="container">
                {props.content}
            </div>
        </div>
    );
};

export default CopyrightFooter;