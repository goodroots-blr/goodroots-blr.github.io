import React, { useState } from "react";
import {
  Element,
  Link,
} from "react-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Button from './../Button'
import ProductOverlay from './../ProductOverlay';
import slides from "./../../resources/data/HeroSlider";

import './HeroSlider.scss';

const HeroSlider = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    document.body.classList.add('productOverlay--open');
    setToggle(true);
  }
  const hideMenu = () => {
    setToggle(false);
    document.body.classList.remove('productOverlay--open');
  }
  return (
    <Element name="heroSlider" className="heroSlider Carousel">
      <Carousel
        useKeyboardArrows
        autoPlay
        infiniteLoop
        emulateTouch
        stopOnHover={false}
        showStatus={false}
        showThumbs={false}>
        {slides.map((item, i) => {
          return (
            <div
              key={i}
              className="heroSlider-Slide"
              style={{ backgroundImage: `url(${item.img})` }}>
              <div className="heroSlider-SlideContent">
                <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
                <p dangerouslySetInnerHTML={{ __html: item.content }} />
                {
                  !item.action.isClickable ? (
                    <Link
                      to={item.action.scrollTo}
                      spy={true}
                      offset={-100}
                      smooth={true}
                      duration={500}
                    >
                      <Button title={item.action.text} type="hero" />
                    </Link>
                  ): (
                    <>
                    <Button title={item.action.text} type="hero"  onClick={handleClick} />
                    {toggle && <ProductOverlay hideMenu={hideMenu} />}
                    </>
                  )
                }
              </div>
            </div>
          )
        })}
      </Carousel>
    </Element>
  );
}

export default HeroSlider;