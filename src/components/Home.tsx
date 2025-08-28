import React, { useEffect, useRef, useState } from "react";
import "./Home.css"
import { gsap } from "gsap";
import ThreeJSPage from "./ThreeJSComponent";
import TaskBar from "./TaskBar2";


const Home = () => {

    const homeRef = useRef(null);

    useEffect(() => {
      const home = homeRef.current;
  
      // Initial hidden state
      gsap.set(home, { opacity: 0 });
  
      // Fade-in animation
      gsap.to(home, { duration: 1, opacity: 1, delay: 0.5 });
    }, []);

    const [pageName, setPageName] = useState("Home");

  return (
    <div>
      <TaskBar currentPage={pageName} />
      <div className="threepage">
        <ThreeJSPage />
      </div>
   
      <div className="home2-page">

          <div className="detail">
            <div className="heading-heading">SKILLS</div>
            <div className="heading">PROGRAMMING</div>
            <div className="info">
               Java, C++, Python, Typescript,  Javascript, PyQt, Qt, OpenGL, C#, SDL, GLSL, React.js, Node.js, mySQL, MongoDB, CSS, Git, MEL, VEX, JSON, Rez, HTML, CSS
            </div>
            <div className="heading">ART/ANIMATION</div>
            <div className="info">
              Maya, Houdini, Unity, Nuke, Adobe After Effects, Blender, Adobe Substance Painter, Adobe Photoshop        
            </div>
            <div className="heading">MISC.</div>
            <div className="info">
              Deadline Monitor, ShotGun API, ShotGrid, Jira, Qt Designer    
            </div>
          </div>

        {/*<div className="vl"></div>*/}
        
        <div className="detail">
            <div className="heading-heading">EXPERIENCE</div>
            <ul>
              <li className="li_Home">
                <div className="heading-experience">WALT DISNEY IMAGINEERING</div>
                  <div className="info-experience">Visual Effects Designer (Pipeline TD) Intern (Spring/Summer 2025)</div>
              </li>
              <li className="li_Home">
              <div className="heading-experience">NORTHEASTERN UNIVERSITY</div>
                  <div className="info-experience">Teaching Assistant, Computer Graphics CS4300 (Fall 2024)</div>
              </li>
              <li className="li_Home">
              <div className="heading-experience">NICKELODEON ANIMATION STUDIOS</div>
                  <div className="info-experience">Data Strategy Intern (Summer 2024)</div>
              </li>
              <li className="li_Home">
              <div className="heading-experience">NORTHEASTERN UNIVERSITY</div>
                  <div className="info-experience">System Support Associate Intern (Fall 2024)</div>
              </li>
              <li className="li_Home">
              <div className="heading-experience">NORTHEASTERN UNIVERSITY</div>
                <div className="info-experience">Teaching Assistant, Fundamentals of Computer Science 2 CS2510 (Spring 2023)</div>
              </li>
              <li className="li_Home">
              <div className="heading-experience">SOCIAL ALPHA</div>
                <div className="info-experience">Digital Design Intern (Summer 2022)</div>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default Home;