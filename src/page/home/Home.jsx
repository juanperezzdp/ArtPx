import React from 'react'
import HomeLanding from './HomeLanding'
import ApiImg from '../../Api/ApiImg'
import Navbar from '../../components/Navbar/Navbar'

function Home() {
  return (
    <>
        <HomeLanding/>
        <Navbar/>
        <ApiImg/>
    </>
  )
}

export default Home