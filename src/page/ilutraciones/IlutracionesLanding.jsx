import React from 'react'
import Ilutraciones from '../../img/Ilutraciones.png'
import '../home/Home.scss'
import Searcher from '../../components/Searcher/Searcher'

function IlutracionesLanding() {
  return (
    <>
    <div className='container'> 
        <Searcher/>
    </div>

    <div>
      <img className='header' src={Ilutraciones} alt="" />
    </div>
    </>
  )
}

export default IlutracionesLanding