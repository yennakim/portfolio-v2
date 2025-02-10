import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import afternoonTea from "../assets/img/afternoonTeaLogo.png"
import takeoff from "../assets/img/takeoffLogo.png"
import projImg3 from "../assets/img/project-img3.png"

export default function Projects() {

  const projects = [
    {
      title: "Afternoon Tea",
      description: "Afternoon Tea is a frontend application built to help users keep track of different tea pairings and allow them to collectively recommend and review them.",
      image: afternoonTea,
      tech: "JavaScript, React Bootstrap, ReactJS, Figma",
      repo: "https://github.com/yennakim/afternoon-tea",
      demo: "https://afternoontea.netlify.app/",
    },
    {
      title: "Takeoff",
      description: "Takeoff is a Fullstack application designed to simplify travel planning and organization.",
      image: takeoff,
      tech: "JavaScript, ReactJS, Python, Django",
      repo: "https://github.com/yennakim/takeoff-client",
      demo: "Not deployed"
    },
    {
      title: "Therapy&Me",
      description: "Therapy&Me is a full-stack application designed to help individuals keep track of their therapy sessions, ensuring that no important details are forgotten.",
      image: projImg3,
      tech: "JavaScript, ReactJS, Python, Django",
      repo: "Not deployed",
      demo: "Not deployed",
    }
    
  ];
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <Row>
              {
                projects.map((project, index) => {
                  return (
                    <ProjectCard key={index} {...project} />
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section> 
  )
}
