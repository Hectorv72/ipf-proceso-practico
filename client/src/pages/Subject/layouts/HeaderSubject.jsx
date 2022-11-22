import React from 'react'
import { Card } from 'react-bootstrap'

const HeaderSubject = ({ title }) => {
  return (
    <Card className='mb-4 mt-4'>
      <Card.Img src='https://www.gstatic.com/classroom/themes/img_breakfast.jpg' />
      <Card.ImgOverlay className='d-flex justify-content-end flex-column'>
        <Card.Title className='header-subject-text text-white mb-0'><h1 className='mb-0'>{title}</h1></Card.Title>
        {/* <div className='text-white h5'><div>2022 - Redes y Seguridad Informática</div></div> */}
      </Card.ImgOverlay>
    </Card>
  )
}

export default HeaderSubject