import React from 'react'
import Atardecer from '../../img/Home.png'
import '../home/Home.scss'
import Searcher from '../../components/Searcher/Searcher'


function HomeLanding() {
  return (
    <>
    <div className='container'> 
        <Searcher/>
    </div>

    <div>
      <img className='header' src={Atardecer} alt="" />
    </div>
    </>
  )
}

export default HomeLanding