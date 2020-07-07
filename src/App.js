import React from 'react';
import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Side from './Components/Side';

function App() {
  return (
    <div className="App">
      <Container  className="mainContainer" size="xl">
        <Navbar expand="sm" className="shadows">
          <Navbar.Brand>
            {/* <img
              alt="Logo"
              src={require("./Images/lekhaAvatar.png")}
              style={{ width: '40x', height: '40px', marginRight: '10px', borderRadius: "0%" }}
            /> */}
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
        <div className="mainContainer-inner">
          <div className="side dark-bg">
            <Side />
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
