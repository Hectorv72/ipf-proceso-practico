import React, { useEffect } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import connectRedux from '../../redux/connectRedux'
import YearTab from './layouts/YearTab'

const Career = ({ career, getCareer, setAppPage, setAppTitle, resetAppTitle, clearSubject }) => {
  const { career: selected } = career
  const { careerId } = useParams()

  useEffect(() => {
    getCareer(careerId)
  }, [careerId])

  useEffect(() => {
    clearSubject()
    setAppPage('career')
  }, [])

  useEffect(() => {
    resetAppTitle()
    selected && setAppTitle(selected.name)
  }, [selected])

  return (
    selected &&
    <Tabs defaultActiveKey={`year-tab-1`} id="uncontrolled-tab-example" className="mb-3">
      {
        selected.calendar.map(
          (year, index) => <Tab key={`tab-${index}`} eventKey={`year-tab-${year.year}`} title={`Año ${year.year}`}><YearTab data={year} /></Tab>
        )
      }
    </Tabs>
  )
}

export default connectRedux(Career)