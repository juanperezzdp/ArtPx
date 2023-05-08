import React, { useState } from "react";
import { useFetch } from "../Hook/useFetch";
import "./ApiImg.scss";
import Spinner from "../components/Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { MdOutlineVideoLibrary } from "react-icons/md";

function ApiVideos() {
  const { datab, loading } = useFetch(
    "https://pixabay.com/api/videos/?key=34656260-1521fb02311370c9bb96d1d72&q=playas&per_page=100"
  );
  const [selectedData, setSelectedData] = useState(null);

  const navigate = useNavigate();

  const handleDataClick = (data) => {
    console.log(data);
    setSelectedData(data);
    navigate("/detailcard", { state: { detailData: data } });
  };

  return (
    <div className="w">
      {loading && (
        <div>
          <Spinner />
        </div>
      )}
      <div className="container-video-warp">
        {datab?.map((data, index) => (
          <div
            className="container-video"
            onClick={() => handleDataClick(data)}
            key={index}
          >
            <div className="container-video">
              <MdOutlineVideoLibrary className="icon-video" />
            </div>
            <video
              src={data.videos.tiny.url}
              muted
              loop
              onMouseEnter={(e) => {
                e.target.play();
              }}
              onMouseLeave={(e) => {
                e.target.pause();
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApiVideos;
