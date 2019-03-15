import React from 'react';
import CertificatesData from './../../resources/data/Certificates';
import './Certificates.scss';

const Certificates = props => {
    return (
        <div className="certificates">
            <div className="container">
                <h1 className="main-title invert" dangerouslySetInnerHTML={{ __html: CertificatesData.title }} />
                <div className="certificates-container">
                    {CertificatesData.logos.map(({ src, alt }) => {
                        return (<img key={alt} src={src} alt={alt} />)
                    })}
                </div>
            </div>
        </div>
    );
};

export default Certificates;