import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './form.css'

function MyForm() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here
    console.log('Input 1:', input1);
    console.log('Input 2:', input2);
    console.log('Input 3:', input3);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="input1">
              <Form.Label>Date:</Form.Label>
              <Form.Control
                type="Date"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="input2">
              <Form.Label>Day:</Form.Label>
              <Form.Control
                type="text"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="input3">
              <Form.Label>Work Report:</Form.Label>
              <Form.Control
                type="text"
                value={input3}
                onChange={(e) => setInput3(e.target.value)}
              />
            </Form.Group>

            <div className="button-container">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default MyForm;
