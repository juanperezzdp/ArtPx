import React from 'react'
import Estrellas from '../../img/estrellas-login.mp4'
import './Login.scss'

function Login() {
  return (
    <div>
        <video muted loop autoPlay>
         <source src={Estrellas} type="video/mp4" />
        </video>
    </div>
  )
}

export default Login