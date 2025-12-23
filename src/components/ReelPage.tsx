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
            <div className="reelInfo">Reel Breakdown in the YouTube description</div>
            <iframe
                width="900" 
                height="500" 
                src="https://www.youtube.com/embed/vBtEBHtUjZI?si=HYT8CqYVxjbsAwN2" 
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        <div>
            <div className="reelHeading">3D Generalist Reel</div>
            <div className="reelInfo">Reel Breakdown in the YouTube description</div>
            <iframe
                width="900" 
                height="500" 
                src="https://www.youtube.com/embed/-52opkrqO3g" 
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
