import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ApiFotos from '../../Api/ApiFotos'

function Fotos() {
  return (
    <div>Fotos
        <Navbar/>
        <ApiFotos/>
    </div>
  )
}

export default Fotos