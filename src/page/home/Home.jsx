import React from 'react'
import HomeLanding from './HomeLanding'
import ApiHome from '../../Api/ApiHome'
import Navbar from '../../components/Navbar/Navbar'



function Home() {
  return (
    <>
        <HomeLanding/>
        <Navbar/>
        <ApiHome/>
    </>
  )
}

export default Home