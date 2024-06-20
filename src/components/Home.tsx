import React, { useEffect, useRef } from "react";
import "./Home.css"
import { gsap } from "gsap";

const Home = () => {

    const homeRef = useRef(null);

    useEffect(() => {
      const home = homeRef.current;
  
      // Initial hidden state
      gsap.set(home, { opacity: 0 });
  
      // Fade-in animation
      gsap.to(home, { duration: 1, opacity: 1, delay: 0.5 });
    }, []);

  return (
    <div className="home2-page">
      <div className="hello">
        Hi! I'm Natasha!
      </div>
      <div className="vl"></div>
      <div className="detail">
       Hi, I'm Natasha! I'm a programmer and 3D artist with interests in computer graphics and technical direction. I love programming tools and finding solutions to enhance storytelling and interaction in animation and 3D media.
      </div>
    </div>
  );
};

export default Home;