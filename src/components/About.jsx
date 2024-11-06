// About.js
import React from 'react';
import { animated, useSpring } from 'react-spring';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from './Navbar';

function FeatureCard({ title, description, icon }) {
  const [hoverProps, setHover] = useSpring(() => ({
    transform: 'scale(1)',
  }));

  return (
    <animated.div
      onMouseEnter={() => setHover({ transform: 'scale(1.05)' })}
      onMouseLeave={() => setHover({ transform: 'scale(1)' })}
      style={hoverProps}
      className="p-3"
    >
      <Card className="h-100 shadow-sm border-0 text-center">
        <Card.Body>
          <div className="h-50 display-4 text-primary mb-3">{icon}</div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </animated.div>
  );
}

function About() {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 100 });

  return (
    <>
    <Navbar/>
    <animated.div style={fadeIn}>
      <Container className="py-5">
        {/* Intro Section */}
        <Row className="text-center mb-5">
          <Col>
            <h1 className="display-4 text-primary">Welcome to TextAloo</h1>
            <p className="lead text-muted bg-secondary bg-opacity-50">
              TextAloo is your ultimate online text manipulation tool, designed to streamline your writing and editing tasks. With features from case conversion to encoding, TextAloo covers all your text editing needs.
            </p>
          </Col>
        </Row>

        {/* Features Section */}
        <Row className="text-center mb-4">
          <Col>
            <h2 className="text-secondary">Core Features</h2>
          </Col>
        </Row>

        <Row className="g-4">
          <Col xs={12} md={6} lg={4}>
            <FeatureCard
              title="Case Conversion"
              description="Easily convert text to Sentence case, UPPERCASE, lowercase, and more."
              icon="🔤"
              />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <FeatureCard
              title="Whitespace Management"
              description="Remove extra whitespace to keep your text clean."
              icon="🚀"
              />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <FeatureCard
              title="Encoding & Decoding"
              description="Encode to Base64, decode text, or reverse text."
              icon="🔐"
              />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <FeatureCard
              title="Text Extraction"
              description="Extract links, numbers, and text patterns with ease."
              icon="🔍"
              />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <FeatureCard
              title="Text Replacement"
              description="Quickly find and replace text to streamline editing."
              icon="🔄"
              />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <FeatureCard
              title="Character & Word Count"
              description="Count characters, words, and lines accurately."
              icon="📊"
              />
          </Col>
        </Row>

        {/* Values Section */}
        <Row className="text-center mt-5">
          <Col>
            <h2 className="text-primary">Why Choose TextAloo?</h2>
            <p className="lead text-muted">
              TextAloo provides a versatile editing experience to handle complex text transformations easily. Whether you're a developer, writer, or casual user, TextAloo is built to save time and enhance productivity.
            </p>
          </Col>
        </Row>
      </Container>
    </animated.div>
              </>
  );
}

export default About;
