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

  const navigate = useNavigate();

  const handleDataClick = (data) => {
    console.log(data);
    setSelectedData(data);
    navigate("/detailcard", { state: { detailData: data } });
  };

  return (
    <>
      <div className="image-grid">
        {loading && (
          <div className="spinner-container">
            <Spinner />
          </div>
        )}
        {datab?.map((data, index) => (
          <div
            onClick={() => handleDataClick(data)}
            className="image-container"
            key={index}
          >
            <img className="image" src={data.webformatURL} alt="" />
            <div className="info-container">
              <img className="user-image" src={data.userImageURL} alt="" />
              <h5>{data.user}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ApiHome;
