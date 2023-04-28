import React, {useState} from 'react'
import {useFetch} from '../Hook/useFetch'
import './ApiImg.scss'
import Spinner from '../components/Spinner/Spinner'

function ApiHome() {
  const {datab, loading} = useFetch('https://pixabay.com/api/?key=34656260-1521fb02311370c9bb96d1d72&q=fotografia&per_page=100')
  const [selectedData, setSelectedData] = useState(null)

  const handleDataClick = (data) => {
    console.log(data);
    setSelectedData(data);
  }

  return (
    <div className='warp-container'>
    {loading && <div><Spinner/></div> }
    {
        datab?.map((data, index)=>(
        <div onClick={() => handleDataClick(datab)} 
        className='container-wa' 
        key={index}>
          
            <img className='Img' src={data.webformatURL} alt="" />
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

export default ApiHome