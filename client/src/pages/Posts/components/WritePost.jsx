import React from 'react'
import { Container } from 'react-bootstrap'
const urlimg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'

const WritePost = () => {
  return (
    <Container fluid className='mb-4 form-control shadow-sm d-flex flex-row'>
      <div className='d-flex justify-content-center align-items-center' style={{ width: 80 }}>
        <img className='rounded rounded-pill' style={{ width: 60 }} src={urlimg} />
      </div>
      <div className='flex-grow-1'>
        <input type="text" className="form-control mb-3 border-0 bg-light" placeholder='Encabezado' />
        <textarea className='form-control border-0 bg-light' style={{ maxHeight: 100 }} placeholder='Escribe tu mensaje...'></textarea>
      </div>
    </Container>
  )
}

export default WritePost