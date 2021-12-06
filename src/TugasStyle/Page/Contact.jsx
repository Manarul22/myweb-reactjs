import "../Css/style.css";
import facebook from "../Image/facebook.png";
import ig from "../Image/ig.png";
import wa from "../Image/wa.png";
import { Container, Row, Col, Image } from "react-bootstrap";

const Contact = () => {
  return (
    <div id="contact" className="text-center mt-5">
      <Container className="my-5 pt-5">
        <Row>
          <Col>
            <Image src={facebook} width="50px" />{" "}
            <Image src={ig} width="50px" />
            <Image src={wa} width="50px" />
          </Col>
        </Row>
        <Row className="mt-5">
          <p>&copy; 2021 Manarul: Allright Reserved</p>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
