import React from 'react'
import { useEffect } from 'react'
import connectRedux from '../../redux/connectRedux'
import CareerCard from './layouts/CareerCard'

const Careers = ({ career, getCareers, setAppPage, resetAppTitle, clearCareer }) => {
  const { careers } = career
  useEffect(() => {
    getCareers()
    resetAppTitle()
    clearCareer()
    setAppPage('careers')
  }, [])

  return (
    <div>
      {
        careers?.length > 0 &&
        careers.map(
          (career, index) => <CareerCard key={`career-card-${index}`} data={career} />
        )
      }
    </div>
  )
}

export default connectRedux(Careers)