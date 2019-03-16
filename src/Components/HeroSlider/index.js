import {
  Element,
  Link,
  Events,
} from "react-scroll";
import React, { useReducer, useEffect, useRef } from "react";
import Button from './../Button'
import slides from "./../../resources/data/HeroSlider";
import useProgress from "./useProgress";

import './HeroSlider.scss';

let SLIDE_DURATION = 3000;

function Carousel(props) {
  return (
    <Element name="heroSlider">
      <section className="heroSlider Carousel" {...props} />
    </Element>
  )
}

function Slides(props) {
  return <ul {...props} />;
}

function Slide({ isCurrent, takeFocus, image, id, title, children, action }) {

  let ref = useRef();

  useEffect(
    () => {
      if (isCurrent && takeFocus) {
        ref.current.focus();
      }
    },
    [isCurrent, takeFocus]
  );

  return (
    <li
      ref={ref}
      aria-hidden={!isCurrent}
      tabIndex="-1"
      aria-labelledby={id}
      className="Slide"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="SlideContent">
        <h2 id={id} dangerouslySetInnerHTML={{ __html: title }} />
        <p dangerouslySetInnerHTML={{ __html: children }} />
        {
          action && (
            <Link
              to={action.scrollTo}
              spy={true}
              offset={-100}
              smooth={true}
              duration={500}
            >
              <Button title={action.text} type="hero" />
            </Link>
          )
        }
      </div>
    </li>
  );
}

function SlideNav(props) {
  return <ul className="SlideNav" {...props} />;
}

function SlideNavItem({ isCurrent, ...props }) {
  return (
    <li className="SlideNavItem">
      <button {...props} aria-current={isCurrent}>
        <span />
      </button>
    </li>
  );
}

function ProgressBar({ animate, time }) {
  let progress = useProgress(animate, time);

  return (
    <div className="ProgressBar">
      <div style={{ width: `${progress * 100}%` }} />
    </div>
  );
}

function HeroSlider() {
  let [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "PROGRESS":
        case "NEXT":
          return {
            ...state,
            takeFocus: false,
            isPlaying: action.type === "PROGRESS",
            currentIndex: (state.currentIndex + 1) % slides.length
          };
        case "PREV":
          return {
            ...state,
            takeFocus: false,
            isPlaying: false,
            currentIndex:
              (state.currentIndex - 1 + slides.length) % slides.length
          };
        case "PLAY":
          return {
            ...state,
            takeFocus: false,
            isPlaying: true
          };
        case "PAUSE":
          return {
            ...state,
            takeFocus: false,
            isPlaying: false
          };
        case "GOTO":
          return {
            ...state,
            takeFocus: true,
            currentIndex: action.index
          };
        default:
          return state;
      }
    },
    {
      currentIndex: 0,
      isPlaying: true,
      takeFocus: false
    }
  );

  useEffect(
    () => {
      if (state.isPlaying) {
        let timeout = setTimeout(() => {
          dispatch({ type: "PROGRESS" });
        }, SLIDE_DURATION);
        return () => clearTimeout(timeout);
      }
    },
    [state.currentIndex, state.isPlaying]
  );

  return (
    <Carousel aria-label="Images from Space">
      <Slides>
        {slides.map((image, index) => (
          <Slide
            key={index}
            id={`image-${index}`}
            image={image.img}
            title={image.title}
            action={image.action}
            children={image.content}
            isCurrent={index === state.currentIndex}
            takeFocus={state.takeFocus}
          />
        ))}
      </Slides>

      <SlideNav>
        {slides.map((slide, index) => (
          <SlideNavItem
            key={index}
            isCurrent={index === state.currentIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => {
              dispatch({ type: "GOTO", index });
            }}
          />
        ))}
      </SlideNav>

      <ProgressBar
        key={state.currentIndex + state.isPlaying}
        time={SLIDE_DURATION}
        animate={state.isPlaying}
      />

      {/* <VisuallyHidden>
        <Alert>
          Item {state.currentIndex + 1} of {slides.length}
        </Alert>
      </VisuallyHidden> */}
    </Carousel>
  );
}

export default HeroSlider;