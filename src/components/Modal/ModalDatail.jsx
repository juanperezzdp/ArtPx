import React from 'react'

function ModalDatail({dataC}) {
  return (
    <>
        <div className='h4'>
                <img style={{width:'2rem', borderRadius:'50%', margin: '1rem'}} src={dataC.userImageURL} alt="" />
                <h5 >{dataC.user}</h5>
        </div>
    </>
  )
}

export default ModalDatail