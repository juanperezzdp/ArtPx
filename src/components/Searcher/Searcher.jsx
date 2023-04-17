import React, { useState } from 'react'
import './searcher.scss'
import { useFetch } from '../../Hook/useFetch'
import { useNavigate } from 'react-router-dom';

function Searcher() {
  const [valueInput, setValueInput] = useState("")
  const {datab} = useFetch(`https://pixabay.com/api/?key=34656260-1521fb02311370c9bb96d1d72&q=${valueInput}&per_page=10`)
  console.log(datab)

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/resultsearcher');
  }

  return (
    <>
    <div className='container-input'>
        <h3>Increíbles Imágenes Gratis Para Descargar</h3>
        <p>Más de 1 millón de fotos libres de derechos compartidas por nuestra talentosa comunidad</p>
        <div className='input-center'>
           <input 
           type="text" 
           placeholder='Buscar imagenes en ArtPx'
           onChange={e=> setValueInput(e.target.value)}
           />
           <button onClick={handleClick}>Buscar</button>
        </div>
       
    </div>

    <div>
      
    </div>
        
    </>
  )
}

export default Searcher