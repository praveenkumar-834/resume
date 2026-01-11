import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import "./Skills.css";
import { Element } from "react-scroll";



function Skills() {
  const skills = [
    { id: 1, title: "HTML", icon: <FaHtml5 /> },
    { id: 2, title: "CSS", icon: <FaCss3Alt /> },
    { id: 3, title: "Tailwind CSS", icon: <SiTailwindcss /> },
    { id: 5, title: "JavaScript", icon: <FaJs /> },
    { id: 6, title: "React", icon: <FaReact /> },
    
  ];

  return (
<Element name = "skills">    
      <div class="parent">
        <h1>Skills</h1>

        <div class="child">
          {skills.map((item) => (
            <h2>
              {item.icon} {item.title}
            </h2>
          ))}
        </div>
      </div>
    </Element>
  );
}

export default Skills;
