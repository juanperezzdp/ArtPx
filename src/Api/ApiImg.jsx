import React, {useState,useEffect} from 'react'
import './ApiImg.scss'

function ApiImg() {
    const [dataBase, setDataBase] = useState([]);

    useEffect(() => {
        fetch('https://pixabay.com/api/?key=34656260-1521fb02311370c9bb96d1d72&per_page=100')
        .then(res=> res.json())
        .then(data =>{
          setDataBase(data.hits)
          console.log(data)
        })
        .catch((err)=>{throw err})
    }, []);
  return (
    <div className='warp-container'>
    {
        dataBase.map((data, index)=>(
        <div className='Card-Img' key={index}>
            <img className='Img' src={data.largeImageURL} alt="" />
            <div className='h4'>
                <img style={{width:'3rem', borderRadius:'50%', margin: '1rem'}} src={data.userImageURL} alt="" />
                <h4 >{data.user}</h4>
            </div>
            

        </div>
    ))
    }
</div>
  )
}

export default ApiImg