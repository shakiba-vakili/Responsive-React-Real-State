import React from "react";
import "./Hero.css";
import {HiLocationMarker} from 'react-icons/hi'

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        <div className="hero-left">
          <div className="flexColStart hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br /> Most Suitable <br /> Property
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
              deleniti?
            </span>
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25}/>
            <input type="text" />
            <button className="button">Search</button>

          </div>
        </div>
        {/* right */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
