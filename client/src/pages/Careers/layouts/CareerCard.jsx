import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CareerCard = ({ data }) => {
  const { name, _id } = data
  return (
    <Card className='my-3' style={{ height: 90 }}>
      <Card.Img variant="top" /> {/** src="holder.js/100px180" */}
      <Card.Body>
        <Card.Title><Link to={`career/${_id}`} className='link-dark' style={{ textDecoration: 'none' }}>{name}</Link></Card.Title>
        {/* <Card.Body className='d-flex justify-content-end'>{username}</Card.Body> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  )
}

export default CareerCard