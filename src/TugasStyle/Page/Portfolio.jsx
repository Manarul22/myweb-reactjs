import "../Css/style.css";
import github from "../Image/github.png";
import gitlab from "../Image/gitlab.png";
import linkedin from "../Image/linkedin.png";
import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h2 className="page-section-heading text-center text-uppercase">
        Portfolio
      </h2>
      <Container>
        <Row>
          <Col className="text-center mb-5">
            <div class="display-1 ">
              <Image src={github} width="150px" alt="" />
            </div>
            <div class="h5">Custom/Extended Components</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              blanditiis. Esse, aut voluptatum delectus error, maiores ipsam
              reiciendis,{" "}
            </p>
          </Col>
          <Col className="text-center mb-5">
            {" "}
            <div class="display-1">
              <Image src={gitlab} width="150px" alt="" />
            </div>
            <div class="h5">Pre-Built Page Examples</div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              earum iste accusamus quas sapiente eius, excepturi nostrum
              asperiores.{" "}
            </p>
          </Col>
          <Col className="text-center mb-5">
            <div class="display-1">
              <Image src={linkedin} width="150px" alt="" />
            </div>
            <div class="h5">Custom/Extended Utilites</div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              placeat eum reiciendis consectetur ipsum sit eos velit voluptatem
              nihil totam
            </p>
          </Col>
        </Row>
        <div className="text-center">
          <Button className="btn btn-primary fw-500 px-5 py-3 fs-5">
            Documentation
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
