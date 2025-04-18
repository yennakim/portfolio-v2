import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';

export default function Contact() {


  return (
    <section className="contact" id='connect'>
    <Container>
    <Row>
          <Col>
            <h2>Contact</h2>
            <Row className="align-items-center">
              <h3>Name</h3>
              <h3>Email</h3>
              <h3>Message</h3>
              <button>Submit</button>
            </Row>
          </Col>
        </Row>
    </Container>
    </section>
  )
};
