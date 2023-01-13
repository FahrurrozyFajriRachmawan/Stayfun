import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import heroImg from "../assets/images/hero-img.png";
import iconItemTraveler from "../assets/images/ic_traveler.svg";
import iconItemTreasure from "../assets/images/ic_treasure.svg";
import iconItemCities from "../assets/images/ic_cities.svg";

const HeroSection = () => {
  return (
    <>
      <Container className="hero-section">
        <Row className="hero-wrapper">
          <Col className="hero-banner col-12 col-lg-6">
            <div className="description">
              Forget Busy Work
              <br />
              Start Next Vacation
            </div>
            <div className="caption">
              We provide what you need to enjoy your
              <br />
              holiday with family. Time to make
              <br />
              another memorable moments.
            </div>
            <Button>Show Me Now</Button>
          </Col>
          <Col className="hero-image col-12 col-lg-6">
            <img src={heroImg} alt="" />
          </Col>
        </Row>
        <Row className="hero-items">
          <Col className="col-4 col-lg-2">
            <img src={iconItemTraveler} alt="" />
            <strong>80.409</strong> traveler
          </Col>
          <Col className="col-4 col-lg-2">
            <img src={iconItemTreasure} alt="" />
            <strong>862</strong> treasure
          </Col>
          <Col className="col-4 col-lg-2">
            <img src={iconItemCities} alt="" />
            <strong>14.92</strong> cities
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HeroSection;
