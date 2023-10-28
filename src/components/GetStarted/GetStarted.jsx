import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="innerWidth paddings g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Homyz</span>
          <span className="secondaryText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odit.
            <br />
            Lorem ipsum dolor sit amet.
          </span>
          <button className="button">
            <a href="mailto:shakibvakili@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
