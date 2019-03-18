import React from 'react';
import './Certificates.scss';

const Certificates = ({data}) => {
    return (
        <div className="certificates">
            <div className="container">
                <h1 className="main-title invert" dangerouslySetInnerHTML={{ __html: data.title }} />
                <div className="certificates-container">
                    {data.logos.map(({ src, alt }) => {
                        return (<img key={alt} src={src} alt={alt} />)
                    })}
                </div>
            </div>
        </div>
    );
};

export default Certificates;