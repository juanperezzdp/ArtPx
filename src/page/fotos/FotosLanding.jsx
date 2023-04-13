import React from 'react'
import '../home/Home.scss'
import Searcher from '../../components/Searcher/Searcher'
import Flor from '../../img/Flores.png'

function FotosLanding() {
  return (
    <>
    <div className='container'> 
        <Searcher/>
    </div>

    <div>
      <img className='header' src={Flor} alt="" />
    </div>
    </>
  )
}

export default FotosLanding