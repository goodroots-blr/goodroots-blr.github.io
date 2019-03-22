import React, {useState} from 'react';
import ProductTile from './../../_UI/ProductTile/ProductTile';
import MobileOverlay from './../../_UI/MobileOverlay/MobileOverlay';
import RadioButtons from './../../_UI/RadioButtons/RadioButtons';
import MobileProductTile from './../../_UI/MobileProductTile/MobileProductTile';
import Scrolling from './../../_UI/Scrolling/Scrolling'
import './OurProducts.scss';

const OurProducts = ({ data }) => {
    const [ toggle, setToggle ] = useState(false)
    const [ selectedProduct, setSelectedProduct ] = useState(undefined)
    const handleClick = (category) => {
        setSelectedProduct(category)
        setToggle(true)
    }
    const onCloseClick = () => {
        setSelectedProduct('')
        setToggle(false)
    }
    return (
        <div className="ourProducts section-top-spacing">
            <div className="container">
                <h1 className="main-title">
                    {data.title()}
                </h1>
                <div className="desktopOnly">
                    <div className="desktop-products-container">
                        {
                            data.products.map((products) => {
                                return (
                                    <div className="products">
                                        {products.map((product, i) => (
                                            <ProductTile key={i} {...product} onClick={handleClick} />
                                        ))}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="mobileOnly">
                    {
                        <>
                            <MobileProductTile {...data.products[0][0]} />
                            <MobileProductTile {...data.products[1][0]} />
                        </>
                    }
                </div>
                <p className="bulkOrderText">
                    {data.bulkOrderText()}
                </p>
            </div>
            {toggle && <MobileOverlay>
                <div className="desktopRadioButtons">
                    <RadioButtons 
                        selectedProduct={selectedProduct}
                        onCloseClick={onCloseClick} />
                </div>
            </MobileOverlay>}
        </div>
    );
};

export default Scrolling({ scrollId: "ourProducts" })(OurProducts);