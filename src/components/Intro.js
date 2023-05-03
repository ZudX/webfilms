import { Col, Container, Row, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title"> Selamat Datang</div>
            <div className="title"> Streaming Film Gratis</div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark">List Movie</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
