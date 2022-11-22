import React from 'react'

const SideBarItemCareer = ({ name, color = 'green' }) => {
  return (
    <>
      <div className='d-flex justify-content-center sidebar-item-icon'>
        <div className='sidebar-item-icon-letter' style={{ backgroundColor: color }}>{name[0]}</div>
      </div>
      <div className='sidebar-item-text text-truncate'>{name}</div>
    </>
  )
}

export default SideBarItemCareer