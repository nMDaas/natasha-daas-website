import React, { useEffect, useRef, useState } from "react";
import "./Home.css"
import { gsap } from "gsap";
import TaskBar from "./TaskBar";

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
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  return (
    <div>
      <TaskBar currentPage={pageName} />
      <div className="home-page">
        <div>
          <img src="/art/homeImage.PNG" className="home-image"/>
        </div>
        <div className="my-name">
          <span className={`my-name-top ${isSafari ? "safari" : ""}`}>Natasha M. Daas</span>
          <span className="my-name-bottom">Natasha M. Daas</span>
        </div>
        <div className="PSA-text">(P.S. I Made This Website!)</div>
        <div className="skills-and-experience">
          <div className="content">
            <div className="detail">
              <div className="heading-heading">EXPERIENCE</div>
              <ul className="ul_Home">
                <li className="li_Home">
                  <div className="heading-experience">WALT DISNEY IMAGINEERING</div>
                    <div className="info-experience">Pipeline TD Intern (Summer/Fall 2026)</div>
                </li>
                <li className="li_Home">
                <div className="heading-experience">NORTHEASTERN UNIVERSITY</div>
                    <div className="info-experience">Teaching Assistant, Computer Graphics CS4300 (Fall 2025, Fall 2024)</div>
                </li>
                <li className="li_Home">
                  <div className="heading-experience">WALT DISNEY IMAGINEERING</div>
                    <div className="info-experience">Pipeline TD Intern (Spring/Summer 2025)</div>
                </li>  
                <li className="li_Home">
                <div className="heading-experience">NICKELODEON ANIMATION STUDIOS</div>
                    <div className="info-experience">Data Strategy Intern (Summer 2024)</div>
                </li>
                <li className="li_Home">
                <div className="heading-experience">NORTHEASTERN UNIVERSITY</div>
                    <div className="info-experience">System Support Associate Intern (Fall 2024)</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="content">
            <div className="detail">
              <div className="heading-heading">SKILLS</div>
              <ul className="ul_Home">
                <li className="li_Home">
                  <div className="heading-experience">PROGRAMMING & DEVELOPMENT</div>
                    <div className="info-experience">C++, Python, Qt, PyQt, USD, C#, OpenGL, GLSL, VEX, MEL, Java, TypeScript, JavaScript, React.js, Three.js, Node.js, HTML, CSS, JSON, Rez, GitHub, CI/CD, Agile, Jira</div>
                </li>
                <li className="li_Home">
                <div className="heading-experience">SOFTWARE & DATA SKILLS</div>
                    <div className="info-experience">Algorithms & Data Structures, Object-Oriented Programming (OOP), Database Design & Querying, MySQL, MongoDB</div>
                </li>
                <li className="li_Home">
                <div className="heading-experience">DCC PROFICIENCIES</div>
                    <div className="info-experience">Maya, Houdini, Blender, Unity, Nuke, Adobe After Effects, Marvelous Designer, XGen, Adobe Substance Painter, Adobe Photoshop</div>
                </li>
                <li className="li_Home">
                <div className="heading-experience">SYSTEMS</div>
                    <div className="info-experience">MacOS, Windows, Linux</div>
                </li>
                <li className="li_Home">
                <div className="heading-experience">MISC.</div>
                  <div className="info-experience">ShotGrid / Shotgun API, Deadline Monitor, Qt Designer</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;