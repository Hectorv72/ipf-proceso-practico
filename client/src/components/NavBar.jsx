import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import connectRedux from '../redux/connectRedux'

const NavBar = ({ children, openSideBar, app }) => {
  const { title } = app

  // const items = [
  //   { label: 'Homepage', link: '/' },
  //   { label: 'Login', link: '/sigin' },
  // ]
  // {
  //   items.map(
  //     (item, index) =>
  //       <li className="nav-item" key={index}>
  //         <div className="nav-link" onClick={() => { }} >{item.label}</div>
  //         {/* <Link className="nav-link" to={item.link}>{item.label}</Link> */}
  //       </li>
  //   )
  // }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className='shadow-sm' > {/* bg="dark" variant="dark" */}
        <Container fluid>
          <div className='navbar-brand' >
            <button className='btn rounded rounded-pill me-3' onClick={openSideBar}><i className='fa-solid fa-bars'></i></button>
            <Link className='link-dark' to="/" style={{ textDecoration: 'none' }}>{title}</Link>
          </div>
          {/* <Link className='navbar-brand' to="/">Classroomn't</Link> */}
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          <Nav>
            <Link className='nav-link' to="login">Login</Link>
            {/* <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      <Container fluid className='mt-2'>
        {children}
      </Container>
    </>
  )
}

export default connectRedux(NavBar)