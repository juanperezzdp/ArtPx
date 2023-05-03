import React, { useState } from "react";
import { useFetch } from "../Hook/useFetch";
import "./ApiImg.scss";
import Spinner from "../components/Spinner/Spinner";
import { useNavigate } from "react-router-dom";

function ApiIlutraciones() {
  const { datab, loading } = useFetch(
    "https://pixabay.com/api/?key=34656260-1521fb02311370c9bb96d1d72&q=illustrations&per_page=100"
  );
  const [selectedData, setSelectedData] = useState(null);

  const navigate = useNavigate();

  const handleDataClick = (data) => {
    console.log(data);
    setSelectedData(data);
    navigate("/detailcard", { state: { detailData: data } });
  };

  return (
    <div className="warp-container">
      {loading && (
        <div>
          <Spinner />
        </div>
      )}
      {datab?.map((data, index) => (
        <div
          onClick={() => handleDataClick(data)}
          className="container-wa"
          key={index}
        >
          <img className="Img" src={data.webformatURL} alt="" />
          <div className="h4">
            <img
              style={{ width: "2rem", borderRadius: "50%", margin: "1rem" }}
              src={data.userImageURL}
              alt=""
            />
            <h5>{data.user}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ApiIlutraciones;
