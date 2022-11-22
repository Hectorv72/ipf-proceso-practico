import React from 'react'
import { Card } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import '../styles/style.css'

const SubjectCard = ({ data }) => {
  const { name, teachers, _id } = data
  const teacher = teachers ? teachers.find(teacher => teacher.type === 'jefe').teacher : null
  return (
    <Link to={`/subject/${_id}`}>
      <Card className='my-3 classroom-card'>
        <Card.Img
          variant="top"
          src='https://www.gstatic.com/classroom/themes/img_breakfast.jpg'
          className='classroom-card-img'
        /> {/** src="holder.js/100px180" */}
        <Card.ImgOverlay>
          <Card.Title className='text-white classroom-card-title'>
            {name.length > 20 ? name.slice(0, 20) + '...' : name}
          </Card.Title>
          <Card.Img className='rounded rounded-pill position-absolute' src='https://lh3.googleusercontent.com/a/default-user=s75-c' style={{ width: '75px', right: 15, top: 65 }} />
          {
            teacher &&
            <Card.Title className='classroom-card-teacher' >{teacher.personal_info.names}</Card.Title>
          }
        </Card.ImgOverlay>
        <Card.Body>
        </Card.Body>
        <Card.Footer className='bg-white classroom-card-footer'></Card.Footer>
      </Card>
    </Link>
  )
}

export default SubjectCard