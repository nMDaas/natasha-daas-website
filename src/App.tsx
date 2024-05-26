import React, { useEffect } from 'react';
import TaskBar from "./components/TaskBar";
import CodingPage from "./components/codingPage";

function App() {
  const urls = [
    "/natasha-daas-website/code/raytracer.jpg",
    "/natasha-daas-website/code/productionplanner.jpg",
    "/natasha-daas-website/code/spirograph.jpg",
    "/natasha-daas-website/code/bakeapp.jpg",
    "/natasha-daas-website/code/plantGen.jpg",
    "/natasha-daas-website/code/portfolio.jpg",
    "/natasha-daas-website/code/rb.jpg",
    "/natasha-daas-website/code/rc.jpg",
    "/natasha-daas-website/code/rd.jpg",
    "/natasha-daas-website/code/bakeapp.jpg",
    "/natasha-daas-website/code/photoeditor.jpg",
    "/natasha-daas-website/code/re.jpg",
    "/natasha-daas-website/code/rf.jpg",
    "/natasha-daas-website/code/rg.jpg",
    "/natasha-daas-website/code/rh.jpg",
    "/natasha-daas-website/code/ri.jpg",
    "/natasha-daas-website/code/rk.gif",
    "/natasha-daas-website/code/rl.gif",
    "/natasha-daas-website/code/rm.gif",
  ]

  useEffect(() => {
    preloadImages();
  }, []);

  function preloadImages() {
    for (let i = 0; i < urls.length; i++) {
      console.log(urls[i])
      preloadImage(urls[i]);
    }
  }

  function preloadImage(url) {
    const img = new Image();
    img.src = url;
  }

  return (
    <>
      <div id="code-section">
        <CodingPage />
      </div>
    </>
  )
}

export default App;
