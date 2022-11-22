import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import connectRedux from '../../redux/connectRedux'
import PostSubjectCard from './components/PostSubjectCard'
import HeaderSubject from './layouts/HeaderSubject'
import NotificationArea from './layouts/NotificationArea'
import './styles/style.css'

const Subject = ({ career, getSubject, setAppTitle, resetAppTitle }) => {
  const { subject } = career
  const { subjectId } = useParams()

  useEffect(() => {
    getSubject(subjectId)
  }, [])

  useEffect(() => {
    resetAppTitle()
    subject && setAppTitle(subject.name)
  }, [subject])

  return (
    subject &&
    <Container style={{ maxWidth: 1000 }}>
      <HeaderSubject title={subject.name} />
      <div className='d-flex flex-row gap-4'>
        <div className='d-none d-md-inline'>
          <NotificationArea />
        </div>
        <div className='flex-grow-1'>
          <PostSubjectCard />
          {/* <div className='h6 text-center'>Aun no hay tareas aquí...</div> */}
        </div>
      </div>
    </Container>
  )
}

export default connectRedux(Subject)