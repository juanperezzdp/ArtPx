import React from 'react'
import Atardecer from '../../img/trees-4450514.jpg'
import '../home/Home.scss'


function HomeLanding() {
  return (
    <div className='container'>
        <img src={Atardecer} alt="" />
        <>
        <h2>Increíbles Imágenes Gratis Para Descargar</h2>
        <p>Nuestro banco de imágenes tiene más de 1 millón de imágenes y videos compartidos por nuestra talentosa comunidad.</p>
        <input type="text" placeholder='Buscar imagenes en ArtPx' />
        </>
        
    </div>
  )
}

export default HomeLanding