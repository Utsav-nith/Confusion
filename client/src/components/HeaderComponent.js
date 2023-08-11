import React,{useState} from "react";
import { Navbar, NavbarBrand, Collapse, NavItem, Nav, NavbarToggler } from 'reactstrap';
import { NavLink } from "react-router-dom";

function Header(props) {
  const [open,setOpen]=useState(false);
  const handleNavClick=(e)=>{
    setOpen(!open);
  };
  return (
    <>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={() => handleNavClick()} />
          <NavbarBrand href="#" className="mr-auto"><img src="./assets/images/logo.png" alt="logo" height="30" width="41" /></NavbarBrand>
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
                <NavLink className="nav-link" to="/contact"><span className="fa fa-lg fa-address-card"></span>Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <div className="jumbotron">
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Restaurant COnfusion</h1>
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