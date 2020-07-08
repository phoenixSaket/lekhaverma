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
            <Col sm={3} className="durationContainer">
              <span className="duration">2009 - 2014</span>
            </Col>
            <Col sm={1} className="verticalLine" />
            <Col sm={8} className="eduactionalQualification">
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
        </Container>
      </div>
    </div>
  );
}

export default Education;