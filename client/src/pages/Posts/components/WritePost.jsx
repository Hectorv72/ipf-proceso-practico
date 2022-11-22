import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import connectRedux from '../../../redux/connectRedux'
const urlimg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'

const initPost = {
  header: null,
  message: null,
  type: 'aviso'
}

const WritePost = ({ addPost }) => {

  const [post, setPost] = useState(initPost)

  const handleChangeValue = ({ target }) => {
    const { name, value } = target
    setPost(prev => ({ ...prev, [name]: value }))
  }

  const handleReset = () => setPost(initPost)

  const handleAddPost = () => addPost(post)

  return (
    <Container fluid className='mb-4 form-control shadow-post border-0'>
      <div className='d-flex flex-row mb-2'>
        <div className='d-flex justify-content-center align-items-center' style={{ width: 80 }}>
          <img className='rounded rounded-pill' style={{ width: 60 }} src={urlimg} />
        </div>
        <div className='flex-grow-1'>
          <input type="text" value={post.header || ''} name='header' onChange={handleChangeValue} className="form-control mb-3 border-0 bg-light" placeholder='Encabezado' />
          <textarea value={post.message || ''} name='message' onChange={handleChangeValue} className='form-control border-0 bg-light' style={{ maxHeight: 100 }} placeholder='Escribe tu mensaje...'></textarea>
        </div>
      </div>
      <div className='text-end'>
        <button onClick={handleReset} className='btn btn-outline-danger me-3'>Cancelar</button>
        <button disabled={!post.header || !post.message} onClick={handleAddPost} className='btn btn-outline-primary'>Postear</button>
      </div>
    </Container>
  )
}

export default connectRedux(WritePost)