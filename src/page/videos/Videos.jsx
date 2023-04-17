import React from 'react'
import VideosLanding from './VideosLanding'
import ApiHome from '../../Api/ApiHome'
import Navbar from '../../components/Navbar/Navbar'


function Videos() {
  return (
    <>
        <VideosLanding/>
        <Navbar/>
        <ApiHome/>
    </>
  )
}

export default Videos