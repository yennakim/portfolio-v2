/* eslint-disable jsx-a11y/anchor-has-content */
import { Col } from "react-bootstrap";

export default function ProjectCard({ title, description, image, repo, demo }) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={image} alt="" width={300}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
          <button className="btn btn-outline-primary"><a href={repo}>Repo</a></button>
          <button className="btn btn-outline-warning"><a href={demo}>Demo</a></button>
          </div>
        </div>
      </div>
    </Col>
  )
}
