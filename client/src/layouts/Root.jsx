import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Root = () => {
  return (
    <NavBar >
      <Outlet />
    </NavBar>
  )
}

export default Root