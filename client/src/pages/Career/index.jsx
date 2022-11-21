import React, { useEffect } from 'react'
import { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import connectRedux from '../../redux/connectRedux'
import YearTab from './layouts/YearTab'

const Career = ({ career, getCareer }) => {
  const { career: selected } = career
  // const [calendar, setCalendar] = useState(career || [])
  const { careerId } = useParams()
  // console.log(selected.calendar)
  useEffect(() => {
    getCareer(careerId)
  }, [])

  // useEffect(() => {
  //   selected &&
  //     setCalendar(selected.calendar)
  //   console.log(calendar)
  // }, [selected])

  return (
    // <div>{careerId}</div>
    // selected?.calendar &&
    <Tabs defaultActiveKey={`year-tab-1`} id="uncontrolled-tab-example" className="mb-3">
      {
        selected?.calendar &&
        selected.calendar.map(
          (year, index) => <Tab key={`tab-${index}`} eventKey={`year-tab-${year.year}`} title={`Año ${year.year}`}><YearTab data={year} /></Tab>
        )
      }
    </Tabs>
  )
}

export default connectRedux(Career)