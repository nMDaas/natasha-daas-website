import React, { useEffect, useRef } from "react";
import "./About.css"
import { gsap } from "gsap";
import pic from "/other/pic.jpg"
import TaskBar from "./TaskBar2";

const About = () => {
  return (
    <div>
      <TaskBar />
      <div className="about-page">
        <div>
          <div className="about">
          about
          </div>
          <div class="detail">
            Hi, I'm Natasha! I'm a programmer and 3D artist with interests in computer graphics and technical direction. I love programming tools and finding solutions to enhance storytelling and interaction in animation and 3D media.
          </div>
        </div>
        <div>
          <img src={pic} className="pic" alt="Description_of_the_image"/>
        </div>
      </div>
    </div>
  );
};

export default About;
