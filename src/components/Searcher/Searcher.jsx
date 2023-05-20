import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searcher.scss";

function Searcher() {
  const [valueInput, setValueInput] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const onSearch = () => {
    navigate("/resultsearcher", {
      state: { searchTerm: valueInput, searchOption: selectedOption },
    });
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
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
          <div className="container-select">
            <select value={selectedOption} onChange={handleSelectChange}>
              <option value="">Imagen</option>
              <option value="videos">Videos</option>
            </select>
          </div>

          <button onClick={onSearch}>Buscar</button>
        </div>
      </div>
    </>
  );
}

export default Searcher;
