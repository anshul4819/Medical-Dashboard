import React from "react";
import {Container, Nav, Navbar} from 'react-bootstrap';

class Navigationbar extends React.Component {
    render(){
        return(
          <div>
          <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <a href="/">Home</a>
            <a href="#">Profile</a>
            <a href="#">Upload Genetic Datrata</a>
            <a href="#">Contact</a>
          </div>

          <h2>Animated Sidenav Example</h2>
          <p>Click on the element below to open the side navigation menu.</p>
          <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>


          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">geneone.AI</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/fileupload"> Dashboard </Nav.Link>
                <Nav.Link href="/profile"> Profile </Nav.Link>
                <Nav.Link href="/analysis"> Analysis </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          </div>
        );
    }
}

export default Navigationbar;