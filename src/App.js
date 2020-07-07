import React from 'react';
import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Side from './Components/Side';
import AboutMe from './Components/AboutMe';

function App() {
  console.log(document.getElementById(AboutMe));
  return (
    <div className="App">
      <Container className="mainContainer" size="xl">
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
            <Nav.Link
              // href="#AboutMe"
              onClick={() => {
                console.log(window.innerWidth);
                if(window.innerWidth > 992) {
                  window.scrollTo(document.body, 0, 1250) 
                } else if(window.innerWidth < 992 && window.innerWidth > 300) {
                  window.scrollTo(document.body, 520, 1250) 
                }
              }}
            >
              About
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <div className="mainContainer-inner">
          <div className="side shadows dark-bg">
            <Side />
          </div>
          <div className="right-side">
            <div id="AboutMe" className="aboutMe shadows cardCustom white-bg">
              <AboutMe />
            </div>
            <div className="portfolio shadows cardCustom white-bg">
              Portfolio
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
