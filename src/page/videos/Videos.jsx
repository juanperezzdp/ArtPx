import React from "react";
import VideosLanding from "./VideosLanding";
import Navbar from "../../components/Navbar/Navbar";
import ApiVideos from "../../Api/ApiVideos";

function Videos() {
  return (
    <>
      <VideosLanding />
      <Navbar />
      <ApiVideos />
    </>
  );
}

export default Videos;
