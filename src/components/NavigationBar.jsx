import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import logo from "../assets/images/logo.png";

const NavigationBar = () => {
  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Browse By</Nav.Link>
            <Nav.Link href="#pricing">Stories</Nav.Link>
            <Nav.Link href="#pricing">Agents</Nav.Link>
          </Nav>
          <div className="btn-right">
            <a href="#" className="link-login" role={Button}>
              Login
            </a>
            <Button className="btn-sign-up">Sign up</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
