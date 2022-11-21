import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CareerCard = ({ data }) => {
  const { name, calendar, _id } = data
  return (
    <Card className='my-3'>
      <Card.Img variant="top" /> {/** src="holder.js/100px180" */}
      <Card.Body>
        <Card.Title><Link to={`${_id}`} className='link-dark' style={{ textDecoration: 'none' }}>{name}</Link></Card.Title>
        <Card.Text>Años: {calendar.length}</Card.Text>
        {/* <Card.Body className='d-flex justify-content-end'>{username}</Card.Body> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  )
}

export default CareerCard