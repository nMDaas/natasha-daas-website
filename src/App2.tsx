import React, { useEffect, useState } from "react";
import TestPage from "./components/ThreeJSComponent";
import TaskBar from "./components/TaskBar2";
import CodingPage from "./components/CodingPage";
import AnimationPage from "./components/AnimationPage2";
import HomePage from "./components/Home";
import ReelPage from "./components/ReelPage";
import ArtPage from "./components/ArtPage2";
import ContactPage from "./components/ContactPage2";
import GamesPage from "./components/GamesPage";
import ContactPageMobile from "./components/ContactPageMobile";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import './App.css';

const ResetScroll = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);      
  }, [pathname]);
  return null;
}

function App() {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if the screen width indicates a mobile device
  const checkMobile = () => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
  }

  useEffect(() => {
    checkMobile(); // Check on initial render
    // Add an event listener to update state on screen resize
    window.addEventListener("resize", checkMobile);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div>
      <Router>
        <ResetScroll />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/reel"
            element={<ReelPage />}
          />
          <Route
            path="/code"
            element={<CodingPage />}
          />
          <Route
            path="/art"
            element={<ArtPage />}
          />
          <Route
            path="/animation"
            element={<AnimationPage />}
          />
          <Route
            path="/games"
            element={<GamesPage />}
          />
          <Route
            path="/contact"
            element={isMobile ? <ContactPageMobile /> : <ContactPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
