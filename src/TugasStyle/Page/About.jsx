import "../Css/style.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const About = () => {
  return (
    <div className="page-section my-5" id="about">
      <Container>
        <h2 className="page-section-heading text-center text-uppercase">
          About
        </h2>
        <Row>
          <Col className="ms-auto">
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
              error necessitatibus voluptates nulla, optio ea temporibus,
              tempora dolores, voluptate nobis iure at quod nihil mollitia sed
              aspernatur vero. Eius, excepturi. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Vel laudantium cupiditate
              voluptatibus perferendis iusto suscipit perspiciatis quia qui ea
              cum! Ut in est officia nostrum nobis labore quasi animi dicta.
            </p>
          </Col>
          <Col className="me-auto">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet non
              consequatur tempore ullam, eligendi laborum! Culpa, vitae. Natus
              fuga repudiandae porro reprehenderit, adipisci laborum cumque
              praesentium? Ex necessitatibus dolorum aperiam. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. In architecto atque soluta
              dolorem unde ea facere, deleniti suscipit vitae accusamus nostrum
              repudiandae quis fugiat asperiores vel eius ut rerum
              reprehenderit?
            </p>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <Button className="btn btn-lg btn-primary px-5 mt-5">Download</Button>
        </div>
      </Container>
    </div>
  );
};

export default About;
