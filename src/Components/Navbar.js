import React, {useState} from 'react'
import {Nav, Navbar, NavbarBrand} from 'react-bootstrap'
import styled from 'styled-components'
import { MDBContainer } from 'mdb-react-ui-kit';
import { Offcanvas } from 'react-bootstrap';

const Styles = styled.div`
  .navbar {
    background-color: #1a1a1b;
  }

  .navbar-brand, .navbar-nav, .nav-link{
    color: #bbb;

    &:hover{
      color: white;
    }
  }
`;

export const Navigation = () => (
    <Styles>
      <Navbar collapseOnSelect expand="lg" bg='dark' varient='dark'>
        <Navbar.Brand>David Villavicencio</Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav"/>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='me-auto'>
            <Nav.Item><Nav.Link href='/home'>Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href='/about'>About</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href='/contact'>Contact</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>


/* <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas> */
)

