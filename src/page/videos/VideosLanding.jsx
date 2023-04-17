import React from 'react'
import Searcher from '../../components/Searcher/Searcher'
import Video from '../../img/atardecer1.mp4'
import '../home/Home.scss'
function VideosLanding() {
  return (
    <>
    <div className='container'> 
        <Searcher/>
    </div>
  <div  >
        <video className='video' loop autoPlay muted>
          <source src={Video} type="video/mp4" />
        </video>
    </div>
    </>
  )
}

export default VideosLanding