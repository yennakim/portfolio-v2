import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import afternoonTea from "../assets/img/afternoonTeaLogo.png"
import takeoff from "../assets/img/takeoffLogo.png"
// import selfCheckIn from "../assets/img/self-check-in.png"

export default function Projects() {

  const projects = [
    {
      title: "Afternoon Tea",
      description: "Frontend application built to help users keep track of different tea pairings.",
      image: afternoonTea,
      tech: "JavaScript, React Bootstrap, ReactJS, Figma",
      repo: "https://github.com/yennakim/afternoon-tea",
      demo: "https://afternoontea.netlify.app/",
    },
    {
      title: "Takeoff",
      description: "Fullstack application designed to simplify travel planning and organization.",
      image: takeoff,
      tech: "JavaScript, ReactJS, Python, Django",
      repo: "https://github.com/yennakim/takeoff-client",
      demo: "Not deployed"
    },
    // {
    //   title: "Self Check-in",
    //   description: "Self Check-in is a full-stack application designed to help individuals keep track of their therapy sessions and mental health, ensuring that no important details are forgotten.",
    //   image: selfCheckIn,
    //   tech: "JavaScript, ReactJS, Python, Django",
    //   repo: "Not deployed",
    //   demo: "Not deployed",
    // }
    
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
    </section> 
  )
}
