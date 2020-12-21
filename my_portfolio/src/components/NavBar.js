import React from "react";
import {Nav, Navbar,Form,FormControl} from 'react-bootstrap';

const NavBar = ()=>{

    return(
        <div>
            <NavBar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href ="#home">Home</Nav.Link>
                    <Nav.Link href ="#about">About Me</Nav.Link>
                    <Nav.Link href ="#contact">Contact</Nav.Link>
                </Nav>
            </NavBar>
        </div>
    );
}
export default NavBar;