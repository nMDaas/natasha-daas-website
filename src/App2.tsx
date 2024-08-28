import React, {useEffect} from "react";
import TestPage from "./components/ThreeJSComponent";
import TaskBar from "./components/TaskBar";
import CodingPage from "./components/CodingPage2";
import AnimationPage from "./components/AnimationPage";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import ArtPage from "./components/ArtPage";
import ContactPage from "./components/ContactPage";
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
          <Route path="natasha-daas-website/code" element={<CodingPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;