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
    <div className="home-page" ref={homeRef}>
      Hi! I'm Natasha!
    </div>
  );
};

export default Home;