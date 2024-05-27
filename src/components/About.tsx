import React, { useEffect, useRef } from "react";
import "./About.css"
import { gsap } from "gsap";
import pic from "/other/pic.jpg"

const About = () => {
  return (
    <div className="about-page">
      <div>
        <div className="about">
        about
        </div>
        <div class="detail">
          Hi, I'm Natasha! I'm a programmer and 3D artist with interests in computer graphics and technical direction. I love problem solving, especially when it can enable artists and animators to tell their stories better :)
        </div>
      </div>
      <div>
        <img src={pic} className="pic" alt="Description_of_the_image"/>
      </div>
    </div>
  );
};

export default About;
