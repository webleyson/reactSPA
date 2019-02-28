import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Logo from '../assets/withoutsmall.png';

const Menu = () => {
  return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand className="logo" href="/">
    <img className="logoImage" src={Logo} />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav  className="ml-auto light" >
      <Link  className="nav-link" to="/">Home</Link>
      <Link  className="nav-link" to="/aws-consultancy">Consultancy</Link>
	    <Link className="nav-link" to="/serverless">Serverless</Link>
	    <Link className="nav-link" to="/devop-services">DevOps</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>


  )
}

export default Menu

