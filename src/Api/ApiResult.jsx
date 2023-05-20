import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../Hook/useFetch";
import "./ApiImg.scss";
import Spinner from "../components/Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { MdOutlineVideoLibrary } from "react-icons/md";

function ResultSearcher() {
  const [selectedData, setSelectedData] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const location = useLocation();
  const searchTerm = location.state && location.state.searchTerm;
  const searchOption = location.state && location.state.searchOption;

  const { datab, loading } = useFetch(
    `https://pixabay.com/api/${searchOption}/?key=34656260-1521fb02311370c9bb96d1d72&q=${searchTerm}&per_page=200`
  );

  const navigate = useNavigate();
  const handleDataClick = (data) => {
    console.log(data);
    setSelectedData(data);
    navigate("/detailcard", { state: { detailData: data } });
  };

  const defaultUserImage =
    "https://pixabay.com/static/img/profile_images/green.svg";

  return (
    <>
      {loading && (
        <div>
          <Spinner />
        </div>
      )}

      <div className="container-result-warp">
        {datab?.map((data, index) => (
          <div className="result-container" key={index}>
            {data.type === "photo" ? (
              <div
                className="result-card"
                onClick={() => handleDataClick(data)}
                onMouseMove={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
                key={index}
              >
                <img className="result-img" src={data.webformatURL} alt="" />
                {hoveredIndex === index && (
                  <div className="result-info">
                    <img
                      className="result-user"
                      src={data.userImageURL || defaultUserImage}
                      alt=""
                    />
                    <h5>{data.user}</h5>
                  </div>
                )}
              </div>
            ) : data.type === "film" ? (
              <div className="">
                <div className="">
                  <div
                    className=""
                    onClick={() => handleDataClick(data)}
                    key={index}
                  >
                    <div className="">
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
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}

export default ResultSearcher;
