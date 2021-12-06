import React, { Component } from "react";
import "../Css/style.css";
import heroImage from "../Image/me.svg";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Button,
  Image,
} from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>
        {/* NAVBAR */}
        <Navbar bg="white" expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="fs-1">
              Indi
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <Nav.Link href="#home" active className="fs-5 me-4 navlink">
                  Home
                </Nav.Link>
                <Nav.Link href="#about" active className="fs-5 me-4 navlink">
                  About
                </Nav.Link>
                <Nav.Link
                  href="#portfolio"
                  active
                  className="fs-5 me-4 navlink"
                >
                  Portfolio
                </Nav.Link>
                <Nav.Link href="#contact" active className="fs-5 me-4 navlink">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Hero */}
        <Container className="py-5 my-5 hero">
          <Row>
            <Col>
              <h1 className="display-5 fw-bold lh-1 mb-3">
                Hello! <br />
                and Welcome! <br />
              </h1>
              <ul className="lead">
                <li>
                  Hi, My name is Manarul Hidayah, and I am Fullstack Web
                  Developer
                </li>
                <li>Do you want to be my friend or hire me a job?</li>
              </ul>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Button className="btn btn-lg px-4 py-3 me-md-2 mt-5">
                  Yes, Click Here!
                </Button>
              </div>
            </Col>
            <Col>
              <Image
                src={heroImage}
                class="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
        {/* About */}
        <About />
        {/* Porftfolio */}
        <Portfolio />
        {/* Contact */}
        <Contact />
      </div>
    );
  }
}

export default Home;
