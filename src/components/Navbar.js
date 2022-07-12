import React from "react";
import {Container, Nav, Navbar} from 'react-bootstrap';
import "./Navbar.css";

function Navigationbar() {
  // var username = localStorage.getItem('username');
    // render(){
        return(
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand >geneone.AI</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/fileupload"> Home </Nav.Link>
                  <Nav.Link style={{color:"grey",paddingLeft:"1000px"}} href="/profile"> Profile </Nav.Link>
                </Nav>
                <div style={{color:"white", paddingLeft:"10px", paddingRight:"20px"}}> {localStorage.getItem('username')} </div>
                <img onClick={"/"} className="photo" src="/logout.png"/>
              </Container>
            </Navbar>
        );
    // }
};

export default Navigationbar;