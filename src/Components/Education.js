import React from 'react';
import './Education.css';
import { Row, Col, Container } from 'react-bootstrap';

function Education() {
  return (
    <div className="educationContainer">
      <div className="title">
        <h3>EDUCATION</h3>
      </div>
      <div className="educationContainerInner">
        <Container>
          <Row>
            <Col xs={3} className="durationContainer">
              <div className="innerDuration">
                <span className="duration">2009 - 2014</span>
                <div className="triangle" />
              </div>
            </Col>
            <Col xs={1} className="verticalLine" />
            <Col xs={8} className="eduactionalQualification">
              <div className="degree">
                Bachelor of Architecture (B. Arch.)
              </div>
              <div className="college">
                Priyadarshini Institute Of Architecture and Design Studies
              </div>
              <div className="city">
                Nagpur
              </div>
            </Col>
          </Row>

          <Row style={{ height: '40px' }}>
            <Col xs={3} className="durationContainer" />
            <Col xs={1} className="verticalLine" />
            <Col xs={8} className="eduactionalQualification" />
          </Row>

          <Row>
            <Col xs={3} className="durationContainer">
              <div className="innerDuration">
                <span className="duration">2009</span>
                <div className="triangle" />
              </div>
            </Col>
            <Col xs={1} className="verticalLine" />
            <Col xs={8} className="eduactionalQualification">
              <div className="degree">
                Higher Secondary Certificate (HSC)
              </div>
              <div className="college">
                Ushabai Deshmukh Jr. College
              </div>
              <div className="city">
                Achalpur
              </div>
            </Col>
          </Row>

          <Row style={{ height: '40px' }}>
            <Col xs={3} className="durationContainer" />
            <Col xs={1} className="verticalLine" />
            <Col xs={8} className="eduactionalQualification" />
          </Row>

          <Row>
            <Col xs={3} className="durationContainer">
              <div className="innerDuration">
                <span className="duration">2007</span>
                <div className="triangle" />
              </div>
            </Col>
            <Col xs={1} className="verticalLine" />
            <Col xs={8} className="eduactionalQualification">
              <div className="degree">
                Secondary School Certificate (SSC)
              </div>
              <div className="college">
                Subodh High School
              </div>
              <div className="city">
                Achalpur
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Education;