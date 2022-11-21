import React from 'react'
import { Accordion, Col, Row } from 'react-bootstrap'
import SubjectCard from './SubjectCard'

const ScheduleItem = ({ data, index }) => {
  const { term, subjects } = data
  return (
    <Accordion.Item eventKey={index}>
      <Accordion.Header>{term}</Accordion.Header>
      <Accordion.Body>
        <Row>
          {
            subjects.map(
              (subject, index) =>
                <Col key={`col-schedule-${index}`} xs={'auto'}><SubjectCard data={subject} /></Col>
            )
          }
        </Row>
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default ScheduleItem