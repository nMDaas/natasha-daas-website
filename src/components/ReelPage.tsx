import React from "react";
import TaskBar from "./TaskBar2";
import "./ReelPage.css"

const ReelPage = () => {
  return (
    <div>
      <TaskBar currentPage="Reel" />
      <div className="reels">
        <div>
            <div className="reelHeading">TD/Pipeline Tools & Computer Graphics Reel</div>
            <iframe
                width="900" 
                height="500" 
                src="https://www.youtube.com/embed/Mk6j7A-Ofzo" 
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        <div>
            <div className="reelHeading">3D Art Reel</div>
            <iframe
                width="900" 
                height="500" 
                src="https://www.youtube.com/embed/mxk5zg7ZksQ" 
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        </div>
    </div>
  );
};

export default ReelPage;
