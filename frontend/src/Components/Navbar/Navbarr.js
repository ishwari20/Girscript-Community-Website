import React from "react";
import "./navbar.css";
import Logo from "./GS_logo_black(1).png";
import {Link} from "react-router-dom"
import {Nav, Navbar} from 'react-bootstrap'

const Navbarr = () => {
  return(
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">
  <a className="navbar-brand" href="#">
    <img src={Logo} alt="logo" className="image" />
      </a>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav className="nav-link">About</Nav>
      <Nav className="nav-link">Event</Nav>
      <Nav className="nav-link">Program</Nav>
      <Nav className="nav-link">Contact</Nav>
      <Link style={{ textDecoration:"none",color:"gray"}} to="/Login"><Nav className="nav-link">Login</Nav></Link>
    </Nav>
    <a href="#" className="button">Donate Now</a>
      <a href="#" className="button">Join Us</a>
  </Navbar.Collapse>
</Navbar>
  );

};

export default Navbarr;