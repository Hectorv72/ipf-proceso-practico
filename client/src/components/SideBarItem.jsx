import React from 'react'
import { NavLink } from 'react-router-dom'
import connectRedux from '../redux/connectRedux'

const SideBarItem = ({ children, to, closeSideBar }) => {
  return (
    <NavLink className='nav-link sidebar-item d-flex align-items-center' to={to} onClick={closeSideBar}>
      {children}
    </NavLink>
  )
}

export default connectRedux(SideBarItem)