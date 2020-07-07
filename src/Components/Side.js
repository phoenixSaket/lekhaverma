import React from 'react';
import "./Side.css";
import { Button } from 'react-bootstrap';

function Side() {
  return (
    <div className="main-side-container">
      <img
        className="avatar-image"
        alt="Avatar"
        src={require("../Images/lekhaAvatar.png")}
      />
      <div className="sideName">
        Lekha Verma
      </div>
      <div className="sideProfession">
        Architect , Interior Designer
      </div>
      <div className="sidePhone">
        <i className="fa fa-phone" style={{ paddingRight: '10px' }}></i>
        +91-7972386165
      </div>
      <div className="sideEmail" >
        <i className="fa fa-envelope" style={{ paddingRight: '10px' }}></i>
        ar.lekhaverma@gmail.com
      </div>
      <div className="sideSocialMedia">
        <i className="fa fa-facebook"></i>
        <i className="fa fa-linkedin"></i>
        <i className="fa fa-instagram"></i>
      </div>
      <div className="sideDownloader">
        <Button variant="custom">
          DOWNLOAD CV
        </Button>
      </div>
    </div>
  );
}

export default Side;