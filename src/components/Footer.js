import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/img/logo.svg"
import linkedinIcon from '../assets/img/linkedin.svg';
import githubIcon from '../assets/img/github.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="www.linkedin.com/in/daun-kim"><img src={linkedinIcon} alt="Linkedin logo" /></a>
              <a href="https://github.com/yennakim"><img src={githubIcon} alt="Github logo" /></a>
            </div>
            <p>© 2025.  All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
