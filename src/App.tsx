import React, { useEffect } from 'react';
import TaskBar from "./components/TaskBar";
import CodingPage from "./components/CodingPage";
import TestPage from "./components/Test";
import AnimationPage from "./components/AnimationPage";

function App() {

  return (
    <>
      <div id="anim-section">
        <AnimationPage />
      </div>
    </>
  )
}

export default App;
