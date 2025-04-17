import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import linkedinIcon from '../assets/img/linkedin.svg';
import githubIcon from '../assets/img/github.svg';
import resume from '../assets/resume.pdf';
import { Download } from "react-bootstrap-icons";


export default function NavBar() {
  const [activeLink, setActiveLink] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/daun-kim/" target="_blank" rel="noreferrer"><img src={linkedinIcon} alt="Linkedin" /></a>
              <a href="https://github.com/yennakim/" target="_blank" rel="noreferrer"><img src={githubIcon} alt="Github" /></a>
              
            </div>
            <a href={resume} target="_blank" rel="noreferrer">
  <button className="rounded"><Download size={20} /> Resume</button>
</a>

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
