import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./DetailCard.scss";
import { AiFillLike } from "react-icons/ai";
import { ImCloudDownload } from "react-icons/im";
import { FiShare2 } from "react-icons/fi";

function DetailCard() {
  const location = useLocation();
  const detailData = location.state && location.state.detailData;
  const [isDownloading, setIsDownloading] = useState(false);
  const [like, setLike] = useState(detailData.likes);

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
            <p className="view">
              {detailData.views.toLocaleString("es-ES")} visto
            </p>
          </div>
        </div>

        <div className="container-button">
          <div className="container-like">
            <button className="like">
              <FiShare2 />
            </button>
            <button className="like" onClick={handleLike}>
              <AiFillLike /> {like}
            </button>
          </div>

          <button
            className="download"
            onClick={handleDownload}
            disabled={isDownloading}
          >
            {isDownloading ? "Descargando..." : "Descargar"}
            <span>
              <ImCloudDownload className="icon-download" />
              {detailData.downloads.toLocaleString("es-ES")}
            </span>
          </button>
        </div>
      </div>

      <div className="c-img">
        <img src={detailData.webformatURL} alt="img" />
      </div>

      <div className="c-tang">
        <p>Imagen de {detailData.tags} de uso gratuito.</p>
      </div>
    </div>
  );
}

export default DetailCard;
