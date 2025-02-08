import { Col } from "react-bootstrap";

export default function ProjectCard({ title, description, image }) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={image} alt="" width={300}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
          <button>Repo</button>
          <button>Live Demo</button>
          </div>
        </div>
      </div>
    </Col>
  )
}
