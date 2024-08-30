import React, {useEffect} from "react";
import TestPage from "./components/ThreeJSComponent";
import TaskBar from "./components/TaskBar2";
import CodingPage from "./components/CodingPage2";
import AnimationPage from "./components/AnimationPage2";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import ArtPage from "./components/ArtPage2";
import ContactPage from "./components/ContactPage2";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import './App.css';

const ResetScroll = () => {
  const {pathname} = useLocation();
  
  useEffect(() => {
    window.scrollTo(0,0);      
  }, [pathname]);
  return null;
}


function App() {
  return (
    <div>
      <Router>
        <ResetScroll/>
        <Routes>
          <Route path="natasha-daas-website/" element={<HomePage />} />
          <Route path="natasha-daas-website/code" element={<CodingPage />} />
          <Route path="natasha-daas-website/art" element={<ArtPage />} />
          <Route path="natasha-daas-website/animation" element={<AnimationPage />} />
          <Route path="natasha-daas-website/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;