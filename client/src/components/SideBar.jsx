import React from 'react'
import { useEffect } from 'react'
import { Offcanvas } from 'react-bootstrap'
import SideBarItemCareer from '../layouts/SideBarItemCareer'
import connectRedux from '../redux/connectRedux'
import SideBarItem from './SideBarItem'

const SideBar = ({ app, career, closeSideBar, getCareers }) => {
  const { sidebar } = app
  const { careers } = career

  useEffect(() => {
    career.loading === true && getCareers()
  }, [])

  const renderItemSideBar =
    (item, index) =>
      <SideBarItem key={`sidebar-item-${index}`} to={`career/${item._id}`}>
        <SideBarItemCareer name={item.name} />
      </SideBarItem>

  return (
    <Offcanvas className="sidebar" show={sidebar} onHide={closeSideBar}>
      <Offcanvas.Header>
        <Offcanvas.Title><i className="fa-solid fa-chalkboard me-2"></i> Classroomn't</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <SideBarItem to="posts">
          <div className='d-flex justify-content-center sidebar-item-icon'><i className='fa-solid fa-message'></i></div>
          <div className='sidebar-item-text'>Posts</div>
        </SideBarItem>
        <SideBarItem to="/">
          <div className='d-flex justify-content-center sidebar-item-icon'><i className='fa-solid fa-chalkboard-user'></i></div>
          <div className='sidebar-item-text'>Careers</div>
        </SideBarItem>
        <hr />
        {
          careers &&
          careers.map(renderItemSideBar)
        }
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default connectRedux(SideBar)