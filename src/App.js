import React from 'react';
import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Side from './Components/Side';
import AboutMe from './Components/AboutMe';
import Portfolio from './Components/Portfolio';
import Education from './Components/Education';

function App() {
  // console.log(document.getElementById(AboutMe));
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
          <Navbar.Collapse id="top-navbar" className=" justify-content-end">
            <Nav>
              <Nav.Link
                onClick={() => {
                  console.log(window.innerWidth);
                  if (window.innerWidth > 992) {
                    window.scrollTo(document.body, 0, 1250)
                  } else if (window.innerWidth < 992 && window.innerWidth > 300) {
                    window.scrollTo(document.body, 520, 1250)
                  }
                }
                }
              >
                About
            </Nav.Link>
              <Nav.Link
                // href="#AboutMe"
                onClick={() => {
                  // console.log(window.innerWidth);
                  if( window.innerWidth > 1024 ) {
                    window.scrollTo(document.body, 270, 1250)
                  } else if (window.innerWidth <= 1024 && window.innerWidth > 992) {
                    window.scrollTo(document.body, 295, 1250)
                  } else if (window.innerWidth < 992 && window.innerWidth >= 768) {
                    window.scrollTo(document.body, 790, 1250)
                  } else if (window.innerWidth < 768 && window.innerWidth >= 425) {
                    window.scrollTo(document.body, 890, 0)
                  } else if (window.innerWidth < 425 && window.innerWidth >= 375) {
                    window.scrollTo(document.body, 915, 0)
                  } else if (window.innerWidth < 375 && window.innerWidth > 300) {
                    window.scrollTo(document.body, 980, 0)
                  }
                }}
              >
                Portfolio
            </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="mainContainer-inner">
          <div className="side shadows dark-bg">
            <Side />
          </div>
          <div className="right-side">
            <div id="AboutMe" className="aboutMe cardCustom shadows white-bg">
              <AboutMe />
            </div>
            <div className="portfolio shadows cardCustom white-bg">
              <Portfolio />
            </div>
            <div className="portfolio shadows blankCard white-bg">
              <Education />
            </div><div className="portfolio shadows blankCard white-bg">
              {/* Portfolio */}
            </div><div className="portfolio shadows blankCard white-bg">
              {/* Portfolio */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
