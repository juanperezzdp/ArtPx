import React, { useState } from "react";
import { useFetch } from "../Hook/useFetch";
import "./ApiImg.scss";
import Spinner from "../components/Spinner/Spinner";
import { useNavigate } from "react-router-dom";

function ApiHome() {
  const { datab, loading } = useFetch(
    "https://pixabay.com/api/?key=34656260-1521fb02311370c9bb96d1d72&q=fotografia&per_page=100"
  );
  const [selectedData, setSelectedData] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

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
      <div className="image-grid">
        {loading && (
          <div>
            <Spinner />
          </div>
        )}
        {datab?.map((data, index) => (
          <div
            onClick={() => handleDataClick(data)}
            onMouseMove={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
            className="image-container"
            key={index}
          >
            <img className="image" src={data.webformatURL} alt="" />
            {hoveredIndex === index && (
              <div className="info-container">
                <img
                  className="user-image"
                  src={data.userImageURL || defaultUserImage}
                  alt=""
                />
                <h5>{data.user}</h5>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default ApiHome;
