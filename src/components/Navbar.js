import React from "react";
import {Container, Nav, Navbar} from 'react-bootstrap';
import "./Navbar.css";

class Navigationbar extends React.Component {
    render(){
        return(
            <Navbar bg="dark" variant="dark">
              <Container>
                {/* <div id="mySidenav" class="sidenav">
                  <a href="/#" class="closebtn" onclick="closeNav()">&times;</a>
                  <a href="/profile">Profile</a>
                  <a href="/fileupload">Upload Genetic Datrata</a>
                </div>
                <span style={{fontSize:"30px"}} onclick="openNav()">&#9776; open</span> */}

                <Navbar.Brand href="/">geneone.AI</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/fileupload"> Home </Nav.Link>
                  {/* <Nav.Link href="/profile"> Profile </Nav.Link> */}
                  {/* <Nav.Link href="/analysis"> Analysis </Nav.Link> */}
                </Nav>
                <Nav.Link style={{color:"grey",paddingRight:"30px"}} href="/profile"> Profile </Nav.Link>
                <img onClick={"/"} className="photo" src="/logout.png"/>
              </Container>
            </Navbar>
        );
    }
}

export default Navigationbar;