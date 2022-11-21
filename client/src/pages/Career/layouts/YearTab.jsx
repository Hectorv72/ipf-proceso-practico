import React from 'react'
import { Accordion } from 'react-bootstrap'
import ScheduleItem from './ScheduleItem'

const YearTab = ({ data }) => {
  const { schedules } = data
  return (
    <Accordion>
      {
        schedules.map(
          (schedule, index) =>
            <ScheduleItem key={`accordion-schedule-${index}`} data={schedule} index={index} />
        )
      }
    </Accordion>
  )
}

export default YearTab