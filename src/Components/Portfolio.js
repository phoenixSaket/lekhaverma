import React, { useState } from 'react';
import './Portfolio.css';
import Gallery from 'react-photo-gallery';
import { Tabs, Tab } from 'react-bootstrap';
// import { useState } from 'react';

function Portfolio() {

  const [key, setKey] = useState('Architectural Planning');

  const photos = [{
    src: require("../Images/Lekha/Architectural Planning/Commercial Complex.jpg"),
    width: 2,
    height: 1.5
  },
  {
    src: require("../Images/Lekha/Architectural Planning/HeadQuarter (1).jpg"),
    width: 2,
    height: 1.75
  },
  // {
  //   src: require("../Images/Lekha/Architectural Planning/Layout01 (1).jpg"),
  //   width: 4,
  //   height: 3.5
  // },
  {
    src: require("../Images/Lekha/Architectural Planning/Police station new 0223.jpg"),
    width: 3,
    height: 1.5
  },
  // {
  //   src: require("../Images/Lekha/Architectural Planning/Site office New(Asfaque Ahmad) (2).jpg"),
  //   width: 5,
  //   height: 4
  // },
  {
    src: require("../Images/Lekha/Architectural Planning/Trafiic Department(Asfaque Ahmad)01.jpg"),
    width: 2.75,
    height: 2
  },
  {
    src: require("../Images/Lekha/Architectural Planning/Type-2.jpg"),
    width: 1.5,
    height: 1
  },
  {
    src: require("../Images/Lekha/Architectural Planning/Type-3.jpg"),
    width: 2.25,
    height: 2
  }
  ];
  const photos1 = [{
    src: require("../Images/Lekha/Interior design of commercial project/cafe wall 4.jpg"),
    width: 16,
    height: 9
  },
  {
    src: require("../Images/Lekha/Interior design of commercial project/Glim_Cafe_rev.jpg"),
    width: 16,
    height: 9
  },
  {
    src: require("../Images/Lekha/Interior design of commercial project/Glim_Meeting_room.jpg"),
    width: 16,
    height: 9
  },
  {
    src: require("../Images/Lekha/Interior design of commercial project/Glim_Recep_black new.jpg"),
    width: 16,
    height: 9
  },
  {
    src: require("../Images/Lekha/Interior design of commercial project/Glim_workspace_light_grey_ceil.jpg"),
    width: 16,
    height: 9
  },
  {
    src: require("../Images/Lekha/Interior design of commercial project/IMG-20190404-WA0001.jpg"),
    width: 16,
    height: 9
  }
  ];
  return (
    <div className="portfolioContainer">
      <div className="title">
        <h3>PORTFOLIO</h3>
      </div>
      <div className="portfolioDescription">
        <Tabs className="car-container"
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="Architectural Planning" title="Architectural Planning">
            <div className="subtitle">
              Architectural Planning
            </div>
            <Gallery photos={photos} />
          </Tab>
          <Tab eventKey="Interior Design" title="Interior Design">
            <div className="subtitle">
              Interior Design for Commercial Project
            </div>
            <Gallery photos={photos1} />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Portfolio;