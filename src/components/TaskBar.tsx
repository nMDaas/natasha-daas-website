import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import './TaskBar.css';
import { useNavigate } from 'react-router-dom';
import resume from "../assets/NatashaDaasResume.pdf";
import home1icon from '/other/home1.png';
import home2icon from '/other/home2.png';
import { GitHub, MailRounded, LinkedIn } from "@mui/icons-material";

const TaskBar = () => {
  const navigate = useNavigate();
  const menuBarRef = useRef(null);
  const [homeIcon, setHomeIcon] = useState(home1icon); // State for the home icon

  useEffect(() => {
    const menuBar = menuBarRef.current;

    // Initial hidden state
    gsap.set(menuBar, { opacity: 0 });

    // Fade-in animation
    gsap.to(menuBar, { duration: 1, opacity: 1, delay: 0.5 });
  }, []);

  const handleScrollToElement = (event, elementId) => {
    console.log("click");
    event.preventDefault();
    const targetElement = document.getElementById(elementId);
    console.log(targetElement);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseEnter = () => {
    setHomeIcon(home2icon); // Set the hover image
  };

  const handleMouseLeave = () => {
    setHomeIcon(home1icon); // Revert to the original image
  };

  return (
    <div className="menu-bar" ref={menuBarRef}>
      <ul>
        <li>
          <a 
            href="#" 
            onClick={(event) => handleScrollToElement(event, "mount-section")}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            <img src={homeIcon} alt="Home Icon" className="home-icon" />
          </a>
        </li>
        <li><a href="#" onClick={(event) => handleScrollToElement(event, "about-section")}>About</a></li>
        <li><a href="#" onClick={(event) => handleScrollToElement(event, "code-section")}>Code</a></li>
        <li><a href="#" onClick={(event) => handleScrollToElement(event, "anim-section")}>Animation & 3D Modeling</a></li>
        <li><a href="#" onClick={(event) => handleScrollToElement(event, "art-section")}>Art</a></li>
        <li><a href="#" onClick={(event) => handleScrollToElement(event, "contact-section")}>Contact</a></li>
        <li><a href={resume} target="_blank" rel="noopener noreferrer">Resume</a></li>
        <a href="https://github.com/nMDaas" target="_blank" rel="noopener noreferrer">
          <GitHub fontSize="large" sx={{width: "30px", height: "30px"}} />
        </a>
        <a href="mailto:daas.n@northeastern.edu">
          <MailRounded sx={{width: "30px", height: "30px"}} />
        </a>
        <a href="https://www.linkedin.com/in/natashamishradaas/" target="_blank" rel="noopener noreferrer">
          <LinkedIn sx={{width: "30px", height: "30px"}} />
        </a>
      </ul>
    </div>
  );
};

export default TaskBar;
