import React from 'react'
import { useEffect } from 'react'
import { Offcanvas } from 'react-bootstrap'
import SideBarItem from '../layouts/SideBarItem'
import connectRedux from '../redux/connectRedux'
import SideBarNavItem from './SideBarNavItem'

const SideBar = ({ app, career, closeSideBar, getCareers }) => {
  const { sidebar, page } = app
  const { careers, career: selected } = career

  useEffect(() => {
    career.loading === true && getCareers()
  }, [])

  const renderItemSideBar =
    (item, index) =>
      <SideBarNavItem key={`sidebar-item-${index}`} to={`career/${item._id}`}>
        <SideBarItem name={item.name} />
      </SideBarNavItem>

  const renderSectionItem = () => {
    // selected.
  }

  return (
    <Offcanvas className="sidebar" show={sidebar} onHide={closeSideBar}>
      <Offcanvas.Header>
        <Offcanvas.Title><i className="fa-solid fa-chalkboard me-2"></i> Classroomn't</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <SideBarNavItem to="posts">
          <div className='d-flex justify-content-center sidebar-item-icon'><i className='fa-solid fa-message'></i></div>
          <div className='sidebar-item-text'>Posteos</div>
        </SideBarNavItem>
        <SideBarNavItem to="/">
          <div className='d-flex justify-content-center sidebar-item-icon'><i className='fa-solid fa-chalkboard-user'></i></div>
          <div className='sidebar-item-text'>Carreras</div>
        </SideBarNavItem>
        <hr />
        {
          careers.length > 0 &&
          careers.map(renderItemSideBar)
        }
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default connectRedux(SideBar)