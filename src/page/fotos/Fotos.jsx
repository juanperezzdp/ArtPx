import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ApiFotos from '../../Api/ApiFotos'
import FotosLanding from './FotosLanding'

function Fotos() {
  return (
    <>
        <FotosLanding/>
        <Navbar/>
        <ApiFotos/>
    </>
  )
}

export default Fotos