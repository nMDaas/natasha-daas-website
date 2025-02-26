import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import './TaskBar.css';
import { useNavigate } from 'react-router-dom';
import resume from "../assets/NatashaDaasResume.pdf";
import home1icon from '/other/home1.png';
import home2icon from '/other/home2.png';
import { GitHub, MailRounded, LinkedIn } from "@mui/icons-material";

interface TaskBarProps {
  currentPage: string;
}

// Functional component definition with props
const TaskBar: React.FC<TaskBarProps> = ({ currentPage }) => {
  console.log("currentPage: ", currentPage);
  const navigate = useNavigate();
  const menuBarRef = useRef(null);
  const [homeIcon, setHomeIcon] = useState(home1icon); // State for the home icon
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const menuBar = menuBarRef.current;

    // Initial hidden state
    gsap.set(menuBar, { opacity: 0 });

    // Fade-in animation
    gsap.to(menuBar, { duration: 1, opacity: 1, delay: 0.3 });
  }, []);

  const getLinkColor = (page: string) => {
    if (page === hoveredItem) {
      return "#f2c9bf"; // Hover color
    } else if (page === currentPage) {
      return "#f2c9bf"; // Active page color
    } else {
      return "white"; // Default color
    }
  };

  const handleScrollToElement = (event, elementId) => {
    console.log("click");
    event.preventDefault();
    const targetElement = document.getElementById(elementId);
    console.log(targetElement);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseEnter = (page: string) => {
    setHoveredItem(page); // Set the hovered item
    if (page === "Home") setHomeIcon(home2icon); // Change home icon on hover
  };

  const handleMouseLeave = () => {
    setHoveredItem(null); // Reset hovered item
    setHomeIcon(home1icon); // Reset home icon
  };

  return (
    <div className="menu-bar" ref={menuBarRef}>
      <ul>
        <li>
          <a 
            href="#" 
            onClick={() => navigate('/natasha-daas-website/')}
            onMouseEnter={() => handleMouseEnter("Home")}
            onMouseLeave={handleMouseLeave}
            style={{ color: getLinkColor("Home") }}
          >
            <img src={homeIcon} alt="Home Icon" className="home-icon" />
          </a>
        </li>
        <li><a href="#" onClick={() => navigate('/natasha-daas-website/reel')}  onMouseEnter={() => handleMouseEnter("Reel")} style={{ color: getLinkColor("Reel") }}>Reel</a></li>
        <li><a href="#" onClick={() => navigate('/natasha-daas-website/code')}  onMouseEnter={() => handleMouseEnter("Code")} style={{ color: getLinkColor("Code") }}>Code</a></li>
        <li><a href="#" onClick={() => navigate('/natasha-daas-website/animation')}  onMouseEnter={() => handleMouseEnter("Animation")} style={{ color: getLinkColor("Animation") }}>Animation & 3D Modeling</a></li>
        <li><a href="#" onClick={() => navigate('/natasha-daas-website/games')}  onMouseEnter={() => handleMouseEnter("Games")} style={{ color: getLinkColor("Games") }}>Games</a></li>
        <li><a href="#" onClick={() => navigate('/natasha-daas-website/art')}  onMouseEnter={() => handleMouseEnter("Art")} style={{ color: getLinkColor("Art") }}>Art</a></li>
        <li><a href="#" onClick={() => navigate('/natasha-daas-website/contact')}  onMouseEnter={() => handleMouseEnter("Contact")} style={{ color: getLinkColor("Contact") }}>Contact</a></li>
        <li><a href={resume} target="_blank" rel="noopener noreferrer"  onMouseEnter={() => handleMouseEnter("Resume")} style={{ color: getLinkColor("Resume") }}>Resume</a></li>
        <a href="https://github.com/nMDaas" target="_blank" rel="noopener noreferrer">
          <GitHub fontSize="large" sx={{width: "25px", height: "25px"}} />
        </a>
        <a href="mailto:daas.n@northeastern.edu">
          <MailRounded sx={{width: "25px", height: "25px"}} />
        </a>
        <a href="https://www.linkedin.com/in/natashamishradaas/" target="_blank" rel="noopener noreferrer">
          <LinkedIn sx={{width: "25px", height: "25px"}} />
        </a>
      </ul>
    </div>
  );
};

export default TaskBar;
