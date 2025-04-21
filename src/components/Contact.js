import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Row,
  Col,
  Button,
  Container,
  Form,
  FloatingLabel,
} from "react-bootstrap";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_bp17ehs", "template_tcwl78b", form.current, {
        publicKey: "hO7oG0Aw3yVGqDAYv",
      })
      .then(
        () => {
          form.current.reset()
          alert("Your email has been sent.");
        },
        (error) => {
          console.warn("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contact" id="contactForm">
      <Container>
        <Row>
          <Col>
            <h2>Contact</h2>
            <Row className="align-items-center">
              <Col md={6}>
                <Form ref={form} onSubmit={sendEmail}>
                  <FloatingLabel controlId="name" label="Name" className="mb-3">
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Name"
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="email"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="message"
                    label="Message"
                    className="mb-3"
                  >
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="message"
                      placeholder="Type your message..."
                    />
                  </FloatingLabel>

                  <Button variant="light" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
