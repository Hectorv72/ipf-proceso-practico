import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

const Root = () => {
  return (
    <>
      <SideBar />
      <NavBar >
        <Outlet />
      </NavBar>
    </>
  )
}

export default Root