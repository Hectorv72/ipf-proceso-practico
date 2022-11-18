import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = ({ children }) => {
  const items = [
    { label: 'Homepage', link: '/' },
    { label: 'Login', link: '/sigin' },
  ]
  {
    items.map(
      (item, index) =>
        <li className="nav-item" key={index}>
          <div className="nav-link" onClick={() => { }} >{item.label}</div>
          {/* <Link className="nav-link" to={item.link}>{item.label}</Link> */}
        </li>
    )
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Link className='navbar-brand' to="/">Classroomn't</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className='nav-link' to="/">Menu</Link>
              <Link className='nav-link' to="login">Login</Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className='mt-2'>
        {children}
      </Container>
    </>
  )
}

export default NavBar