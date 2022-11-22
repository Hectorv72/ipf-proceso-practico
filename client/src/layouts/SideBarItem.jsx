import React from 'react'

const SideBarItem = ({ name, color = 'green' }) => {
  return (
    <div className='d-flex w-100'>
      <div className='w-auto text-start sidebar-item-icon me-3'>
        <div className='sidebar-item-icon-letter' style={{ backgroundColor: color }}>{name[0]}</div>
      </div>
      <div className='flex-grow-1 sidebar-item-text text-start text-truncate'>{name}</div>
    </div>
  )
}

export default SideBarItem