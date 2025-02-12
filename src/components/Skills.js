import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import javascript from '../assets/img/javascript.svg'
import reactjs from '../assets/img/react.svg'
import python from '../assets/img/python.svg'
import django from '../assets/img/django.svg'
import colorSharp from '../assets/img/color-sharp.png';

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills & Technologies</h2>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={javascript} alt="Javascript icon" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={reactjs} alt="ReactJS icon" />
                  <h5>ReactJS</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Python icon" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={django} alt="Django icon" />
                  <h5>Django</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="background aesthetic" />
    </section>
  );
}
