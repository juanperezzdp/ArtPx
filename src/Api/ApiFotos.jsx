import React from 'react'
import { useFetch } from '../Hook/useFetch'
import './ApiImg.scss'


function ApiFotos() {
    const {datab} = useFetch('https://pixabay.com/api/?key=34656260-1521fb02311370c9bb96d1d72&q=natural&per_page=100')
  return (
    <div className='warp-container'>
    {
        datab?.map((data, index)=>(
        <div className='container-wa' key={index}>
            <img className='Img' src={data.largeImageURL} alt="" />
            <div className='h4'>
                <img style={{width:'2rem', borderRadius:'50%', margin: '1rem'}} src={data.userImageURL} alt="" />
                <h5 >{data.user}</h5>
            </div>
        </div>
    ))
    }
</div>
  )
}

export default ApiFotos