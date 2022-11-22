import React from 'react'
import { useEffect } from 'react'
import connectRedux from '../../redux/connectRedux'
import CareerCard from './layouts/CareerCard'

const Careers = ({ career, getCareers, setAppPage }) => {
  const { careers } = career
  useEffect(() => {
    getCareers()
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