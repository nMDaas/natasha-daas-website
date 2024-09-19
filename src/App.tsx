import TestPage from "./components/ThreeJSComponent";
import TaskBar from "./components/TaskBar";
import CodingPage from "./components/CodingPage";
import AnimationPage from "./components/AnimationPage";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import ArtPage from "./components/ArtPage";
import ContactPage from "./components/ContactPageMobile";

import './App.css';

function App() {
  return (
    <div>
      <div id="taskbar">
        <TaskBar />
      </div>
      <div id="mount-section">
        <TestPage />
      </div>
      <div id="about-section">
        <HomePage />
      </div>
      <h2 id="code-section">Coding Projects</h2>
      <CodingPage />
      <h2 id="anim-section">Animation & Modeling</h2>
      <div className="animpage">
        <AnimationPage />
      </div>
      <h2 id="art-section">Some Art!</h2>
      <div className="animpage">
        <ArtPage />
      </div>
      <div id="contact-section">
        <ContactPage />
      </div>
    </div>
  );
}

export default App;