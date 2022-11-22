import React from 'react'
import { Card } from 'react-bootstrap'

const img = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'

const PostSubjectCard = () => {
  return (
    <Card className='shadow-post border-0'>
      <Card.Body>
        <div className='d-flex flex-row align-items-center'>
          <div style={{ width: 60 }}>
            <img className='rounded rounded-pill' src={img} style={{ width: 40 }} />
          </div>
          <div className='write-card'>Anuncia algo a la clase</div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default PostSubjectCard