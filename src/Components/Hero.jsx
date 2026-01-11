import React from "react";
import "./Hero.css";
import { Element } from "react-scroll";
import { BiFontSize } from "react-icons/bi";
import profileImg from "../assests/img.jpg";


function Hero() {
  return (
    <Element name="home">
    <div className="hero">
      <h1>R Praveen Kumar<br></br> <span>Passonate FullStack developer </span> </h1>
      
      <img src={profileImg} alt="profile" />
    </div>
    </Element>
  );
}

export default Hero;
