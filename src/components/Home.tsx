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
            <div className="skill-section">
              <div className="heading">PROGRAMMING & DEVELOPMENT</div>
              <div className="info">
                C++, Python, Java, TypeScript, JavaScript, C#, Qt, PyQt, OpenGL, SDL, GLSL, VEX, MEL, React.js, Three.js, Node.js, HTML, CSS, JSON, Rez, GitHub, CI/CD, Agile, Jira
              </div>
            </div>

            <div className="skill-section">
              <div className="heading">SOFTWARE & DATA SKILLS</div>
              <div className="info">
                Algorithms & Data Structures, Object-Oriented Programming (OOP), Database Design & Querying, MySQL, MongoDB
              </div>
            </div>

            <div className="skill-section">
              <div className="heading">DCC PROFICIENCIES</div>
              <div className="info">
                Maya, Houdini, Blender, Unity, Nuke, Adobe After Effects, Marvelous Designer, XGen, Adobe Substance Painter, Adobe Photoshop
              </div>
            </div>

            <div className="skill-section">
              <div className="heading">SYSTEMS</div>
              <div className="info">
                MacOS, Windows, Linux
              </div>
            </div>

            <div className="skill-section">
              <div className="heading">MISC.</div>
              <div className="info">
                ShotGrid / Shotgun API, Deadline Monitor, Qt Designer
              </div>
            </div>

            {/*
            <div className="heading">PROGRAMMING & DEVELOPMENT</div>
            <div className="info">
               Java, C++, Python, Typescript,  Javascript, PyQt, Qt, OpenGL, C#, SDL, GLSL, MEL, VEX, React.js, Three.js, Node.js, mySQL, MongoDB, GitHub, Jira, Agile, CI/CD, Wedb Development, JSON, Rez, HTML, CSS
            </div>
            <div className="heading">DCC PROFICIENCIES</div>
            <div className="info">
              Maya, Houdini, Unity, Nuke, Adobe After Effects, Marvelous Designer, Blender, XGen, Adobe Substance Painter, Adobe Photoshop        
            </div>
            <div className="heading">SOFTWARE & DATA SKILLS</div>
            <div className="info">
              Algorithms & Data Structures, Object-Oriented Programming (OOP), Database Design, Database Querying, MongoDB     
            </div>
            <div className="heading">MISC.</div>
            <div className="info">
              MacOS, Windows, Linux, Deadline Monitor, ShotGun API, ShotGrid, Qt Designer, 
            </div>*/}
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