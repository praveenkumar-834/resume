import React from "react";
import "./Hero.css";
import { Element } from "react-scroll";
import { BiFontSize } from "react-icons/bi";


function Hero() {
  return (
    <Element name="home">
    <div className="hero">
      <h1>R Praveen Kumar<br></br> <span>Passonate FullStack developer </span> </h1>
      
      <img src="/src/assets/profile.png" alt="profile" />
    </div>
    </Element>
  );
}

export default Hero;
