import React from 'react'
import { Card } from 'react-bootstrap'

const PostCard = ({ data }) => {
  const { header, message, sender, createdAt } = data
  const { username } = sender
  const postDate = new Date(createdAt).toLocaleString('en-GB', { timeZone: 'America/Argentina/Buenos_Aires' })

  return (
    <Card className='my-3'>
      <Card.Img variant="top" /> {/** src="holder.js/100px180" */}
      <Card.Body>
        <Card.Title>{header}</Card.Title>
        <Card.Text>{message}</Card.Text>
        <Card.Body className='d-flex justify-content-between'>
          <div>{username}</div>
          <div style={{ color: 'gray' }}>{postDate}</div>
        </Card.Body>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  )
}

export default PostCard