import React from "react";
import { useLocation } from "react-router-dom";

function DetailCard() {
  const location = useLocation();
  const detailData = location.state && location.state.detailData;

  console.log(detailData);

  return (
    <div>
      <img className="Img" src={detailData.webformatURL} alt="" />
      <div className="h4">
        <img
          style={{ width: "2rem", borderRadius: "50%", margin: "1rem" }}
          src={detailData.userImageURL}
          alt=""
        />
        <h5>{detailData.user}</h5>
      </div>
    </div>
  );
}

export default DetailCard;
