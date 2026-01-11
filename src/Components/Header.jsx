import React from "react";
import { Link } from "react-scroll";

import "./Header.css";

function Header({ scrollToContact }) {
  return (
    <>
    
      <div class="Header">
        
        <Link
        to="home"
        smooth={true}
        duration={500}
        offset={-70}
      >
        Home
        </Link>
        <Link
        to="about"
        smooth={true}
        duration={500}
        offset={-70}
      >
        About
        </Link>
        <Link
        to="skills"
        smooth={true}
        duration={500}
        offset={-70}
      >
        Skills
        </Link>
        <Link
        to="experience"
        smooth={true}
        duration={500}
        offset={-70}
      >
        Experience
        </Link>
        <Link
        to="contact"
        smooth={true}
        duration={500}
        offset={-70}
      >
        Contact
        </Link>
        

      </div>
    </>
  );
}

export default Header;
