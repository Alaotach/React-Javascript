import React from 'react';
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import { FaUserShield, FaFileSignature, FaShieldAlt, FaEnvelope } from 'react-icons/fa';
import Navbar from './Navbar';

function PrivacyPolicy() {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 100 });

  return (
    <>
    <Navbar/>
    <Container className="my-5 p-4" style={{borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <animated.div style={fadeIn}>
        <Row>
          <Col className="text-center">
            <h1 className="display-4 text-primary mb-3">Privacy Policy</h1>
            <p className="text-muted mb-5">Last Updated: <strong>[06-11-2024]</strong></p>
          </Col>
        </Row>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <FaUserShield className="me-2 text-primary" />
              <h5>1. Information We Collect</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p><strong>Personal Information</strong></p>
              <p>We do not require or collect personal information for general usage of our website. However, if you contact us, we may collect your name, email address, and message content.</p>
              <p><strong>Usage Data</strong></p>
              <p>We may collect non-personal data like IP address, browser type, and time of visit to improve our website and user experience.</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <FaFileSignature className="me-2 text-primary" />
              <h5>2. How We Use Your Information</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>We use collected information to respond to inquiries and improve our services by analyzing usage data to optimize functionality and content.</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <FaShieldAlt className="me-2 text-primary" />
              <h5>3. Data Security</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>We employ security measures to protect your information against unauthorized access, alteration, or disclosure. However, please note that no method is 100% secure.</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <FaEnvelope className="me-2 text-primary" />
              <h5>4. Contact Us</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>If you have any questions about this Privacy Policy, please reach out to us at:</p>
              <p><strong>Email:</strong> alaotach@gmail.com</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Row className="mt-4">
          <Col className="text-center">
            <Button href="mailto:alaotach@gmail.com" variant="primary" size="lg">
              Contact Us
            </Button>
          </Col>
        </Row>
      </animated.div>
    </Container>
    </>
  );
}

export default PrivacyPolicy;
