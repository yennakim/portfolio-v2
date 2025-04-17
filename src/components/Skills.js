import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import javascript from "../assets/img/javascript.svg";
import reactjs from "../assets/img/react.svg";
import python from "../assets/img/python.svg";
import django from "../assets/img/django.svg";

export default function Skills() {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills & Technologies</h2>
              <Row className="justify-content-center">
                <Col xs={12} sm={6} md={3} className="mb-4">
                  <img
                    src={javascript}
                    alt="Javascript icon"
                  />
                  <h5>JavaScript</h5>
                </Col>
                <Col xs={12} sm={6} md={3} className="mb-4">
                  <img
                    src={reactjs}
                    alt="ReactJS icon"
                  />
                  <h5>ReactJS</h5>
                </Col>
                <Col xs={12} sm={6} md={3} className="mb-4">
                  <img
                    src={python}
                    alt="Python icon"
                  />
                  <h5>Python</h5>
                </Col>
                <Col xs={12} sm={6} md={3} className="mb-4">
                  <img
                    src={django}
                    alt="Django icon"
                  />
                  <h5>Django</h5>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
