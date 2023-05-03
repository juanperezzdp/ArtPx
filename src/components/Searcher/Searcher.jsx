import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searcher.scss";

function Searcher() {
  const [valueInput, setValueInput] = useState("");
  const navigate = useNavigate();

  const onSearch = () => {
    navigate("/resultsearcher", { state: { searchTerm: valueInput } });
  };

  return (
    <>
      <div className="container-input">
        <h3>Increíbles Imágenes Gratis Para Descargar</h3>
        <p>
          Más de 1 millón de fotos libres de derechos compartidas por nuestra
          talentosa comunidad
        </p>
        <div className="input-center">
          <input
            type="text"
            placeholder="Buscar imagenes en ArtPx"
            onChange={(e) => setValueInput(e.target.value)}
          />
          <button onClick={onSearch}>Buscar</button>
        </div>
      </div>
    </>
  );
}

export default Searcher;
