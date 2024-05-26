import React, { useEffect } from 'react';
import TaskBar from "./components/TaskBar";
import CodingPage from "./components/CodingPage";
import TestPage from "./components/Test";

function App() {

  return (
    <>
      <div id="code-section">
        <CodingPage />
      </div>
    </>
  )
}

export default App;
