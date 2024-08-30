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
      <ThreeJSPage />
   
      <div className="home2-page">

          <div className="detail">
            <div className="heading">SKILLS</div>
            <div className="info">
              <em>Programming: </em>C++, Python, PyQt, Qt, OpenGL, SDL, Java, Javascript, Typescript, React, GLSL, SQL, MongoDB, HTML CSS
            </div>
            <div className="info">
              <em>Art/Animation: </em>Maya, Blender, Adobe Substance Painter, Adobe Illustrator, Adobe Photoshop, Adobe After Effects, Figma
            </div>
          </div>

        <div className="vl"></div>
        
        <div className="detail">
            <div className="heading">EXPERIENCE</div>
            <div className="info">
              - <em>Northeastern University: </em> Teaching Assistant, Computer Graphics CS4300 (Fall 2024)
            </div>
            <div className="info">
              - <em>Nickelodeon: </em> Internship, Data Strategy Intern (Summer 2024)
            </div>
            <div className="info">
              - <em>Northeastern University: </em> Co-op, System Support Associate -  (Fall 2024)
            </div>
            <div className="info">
              - <em>Northeastern University: </em> Teaching Assistant, Fundamentals of Computer Science 2 CS2510 (Spring 2023)
            </div> 
            <div className="info">
              - <em>Social Alpha: </em> Internship, Digital Design Intern (Summer 2022)
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;