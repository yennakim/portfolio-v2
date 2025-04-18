import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import mountain from '../assets/img/mountain.svg'

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['Full Stack Developer', 'Problem Solver', 'Collaborator', 'Listener'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  // eslint-disable-next-line no-unused-vars
  const [index, setIndex] = useState(1);

useEffect(() => {
  let ticker = setInterval(() => {
    tick();
  }, delta)

  return () => { clearInterval(ticker) };
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline rounded">Hello! I'm Daun</span>
            <h1>{`Daun Kim `}</h1>
            <h2 className="wrap">{text}</h2>
            <p>I overcome mountains through planning, communication, testing, and documentation </p>
            <p>My development philosophy centers around building efficient, scalable applications that streamline processes while offering a fluid user experience.</p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={mountain} alt="mountain" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
