import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import Navbar from './Navbar';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });
  const [hoverProps, setHover] = useSpring(() => ({ transform: 'scale(1)' }));

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Contact Form Submission of TextAloo from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:alaotach@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's email client with the prefilled email
    window.location.href = mailtoLink;
  };

  return (
    <>
    <Navbar/>
    <animated.div style={fadeIn}>
      <Container className="py-5">
        <Row className="text-center mb-5">
          <Col>
            <h1 className="display-4 text-primary">Get in Touch</h1>
            <p className="lead text-muted">
              Have questions, suggestions, or just want to say hi? Fill out the form below, and we’ll get back to you as soon as possible!
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-4">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-4">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Write your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  />
              </Form.Group>

              <animated.div
                onMouseEnter={() => setHover({ transform: 'scale(1.05)' })}
                onMouseLeave={() => setHover({ transform: 'scale(1)' })}
                style={hoverProps}
                >
                <Button type="submit" variant="primary" size="lg" className="w-100">
                  Submit
                </Button>
              </animated.div>
            </Form>
          </Col>
        </Row>
      </Container>
    </animated.div>
                  </>
  );
}

export default ContactPage;
