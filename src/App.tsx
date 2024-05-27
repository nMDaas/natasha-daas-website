import TaskBar from "./components/TaskBar";
import CodingPage from "./components/CodingPage";
import AnimationPage from "./components/AnimationPage";
import HomePage from "./components/Home";
import AboutPage from "./components/About";

import './App.css';

function App() {
  return (
    <div>
      <div id="taskbar">
        <TaskBar />
      </div>
      <div id="home-section">
        <HomePage />
      </div>
      <div id="about-section">
        <AboutPage />
      </div>
      <h2 id="code-section">Coding Projects</h2>
      <CodingPage />
      <h2 id="anim-section">Animation & Modeling</h2>
      <div className="animpage">
        <AnimationPage />
      </div>

    </div>
  );
}

export default App;