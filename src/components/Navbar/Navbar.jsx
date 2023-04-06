import React from 'react';
import './Navb.scss'
import { RiHome3Fill} from 'react-icons/ri';
import { BsFillImageFill} from 'react-icons/bs';
import { HiPaintBrush} from 'react-icons/hi2';
import { ImVideoCamera} from 'react-icons/im';






function Navbar() {
  return (
    <nav className='container-nav'>
       <div><a href=""><RiHome3Fill className='icon'/>Home</a></div>
       <div><a href=""><BsFillImageFill className='icon'/>Fotos</a></div>
       <div><a href=""><HiPaintBrush className='icon'/>Ilustraciones</a></div>
       <div><a href=""><ImVideoCamera className='icon'/>Videos</a></div>
    </nav>
  )
}

export default Navbar