import React from "react";
import Searcher from "../../components/Searcher/Searcher";
import Video from "../../img/atardecer1~3.mp4";
import "../home/Home.scss";
function VideosLanding() {
  return (
    <>
      <div style={{ height: "28rem" }}>
        <div className="video">
          <video loop autoPlay muted>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <Searcher />
        </div>
      </div>
    </>
  );
}

export default VideosLanding;
