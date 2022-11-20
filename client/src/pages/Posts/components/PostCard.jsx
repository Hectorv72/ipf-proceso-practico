import React from 'react'
import { Card } from 'react-bootstrap'

const PostCard = ({ data }) => {
  const { header, message, sender } = data
  const { username } = sender
  return (
    <Card className='my-3'>
      <Card.Img variant="top" /> {/** src="holder.js/100px180" */}
      <Card.Body>
        <Card.Title>{header}</Card.Title>
        <Card.Text>{message}</Card.Text>
        <Card.Body className='d-flex justify-content-end'>{username}</Card.Body>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  )
}

export default PostCard