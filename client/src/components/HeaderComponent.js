import React, { useState, useRef } from "react";
import { Navbar, NavbarBrand, Collapse, NavItem, Nav, NavbarToggler, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from "react-router-dom";
import { baseUrl } from "../shared/baseUrl";

function Header(props) {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  var username = useRef();
  var password = useRef();
  var remember = useRef();

  const handleNavClick = (e) => {
    setOpen(!open);
  };
  const toggleLoginModal = () => {
    setModalOpen(!isModalOpen);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const user = username.value;
    const pass = password.value;
    const remem = remember.checked;

    console.log(user, pass, remem);
  };
  return (
    <>
      <Modal isOpen={isModalOpen} toggle={toggleLoginModal}>
        <ModalHeader toggle={toggleLoginModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input type="text" id="username" name="username" innerRef={(input) => username = input} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" name="password" innerRef={(input) => password = input} />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="remember" innerRef={(input) => remember = input} />
                Remember Me
              </Label>
            </FormGroup>
            <Button type="submit" value="submit" color="primary">Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={() => handleNavClick()} />
          <NavbarBrand href="#" className="mr-auto"><img src={baseUrl + "/images/logo.png"} alt="logo" height="30" width="41" /></NavbarBrand>
          <Collapse navbar isOpen={open}>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home"><span className="fa fa-lg fa-home"></span>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/menu"><span className="fa fa-lg fa-list"></span>Menu</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/about"><span className="fa fa-lg fa-info"></span>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus"><span className="fa fa-lg fa-address-card"></span>Contact Us</NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto">
              <NavItem>
                <Button outline onClick={toggleLoginModal}><span className="fa fa-sign-in"></span> Login</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <div className="jumbotron">
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Restaurant Confusion</h1>
              <p>We take inspiration from the World's best cuisines, and create a
                unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;