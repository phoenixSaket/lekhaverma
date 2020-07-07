import React from 'react';
import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="transparent" expand="lg">
        <Navbar.Brand>
          Lekha Verma
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="top-navbar" />
        <Navbar.Collapse id="top-navbar" className="justify-content-end">
          <Nav>
            <Nav.Link href="about">
              About
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className="mainContainer" size="xl">
        <div className="mainContainer-inner">
          <div className="side white-bg">
            Side
        </div>
          <div className="right-side">
            <div className="aboutMe cardCustom white-bg">
              About Me
            </div>
            <div className="portfolio cardCustom white-bg">
              Portfolio
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
