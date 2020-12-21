import React from "react";
import {Nav, Navbar,Form,FormControl,NavbarBrand,NavLink} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const NavBar = ()=>{

    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <NavbarBrand href="#home">Portfolio</NavbarBrand>
                <Nav className="mr-auto">
                    <NavLink href ="#home">Home</NavLink>
                    <NavLink href ="#about">About Me</NavLink>
                    <NavLink href ="#contact">Contact</NavLink>
                </Nav>
            </Navbar>
        </div>
    );
}
export default NavBar;