import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./DetailCard.scss";
import { AiFillLike } from "react-icons/ai";
import { GrFormView } from "react-icons/gr";

function DetailCard() {
  const location = useLocation();
  const detailData = location.state && location.state.detailData;
  const [isDownloading, setIsDownloading] = useState(false); // nuevo estado
  const [like, setLike] = useState(detailData.likes);
  console.log(detailData);

  // función para manejar la descarga de la imagen
  const handleDownload = () => {
    setIsDownloading(true);
    fetch(detailData.largeImageURL)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${detailData.id}.jpg`);
        document.body.appendChild(link);
        link.click();
        setIsDownloading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLike = () => {
    setLike(detailData.likes + 1);
  };

  return (
    <div className="container-detail">
      <div className="user">
        <div className="user-img">
          <img src={detailData.userImageURL} alt="img" />

          <div className="title-fallow">
            <h5>{detailData.user}</h5>
            <button onClick={handleLike}>
              <GrFormView className="like" /> {detailData.views}
            </button>
          </div>
        </div>

        <div className="container-button">
          <button className="like" onClick={handleLike}>
            <AiFillLike /> {like}
          </button>
          <button
            className="download"
            onClick={handleDownload}
            disabled={isDownloading}
          >
            {isDownloading ? "Descargando..." : "Descargar"}
          </button>
        </div>
      </div>

      <div className="c-img">
        <img src={detailData.webformatURL} alt="img" />
      </div>
    </div>
  );
}

export default DetailCard;
