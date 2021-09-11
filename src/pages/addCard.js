import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default class AddCard extends Component {
  constructor() {
    super();
    this.state = {
      Catagory: "",
      Definition: "",
      Term: "",
    };
  }

  render() {
    return (
      <Container>
        <Row>

          <Col md={12} className="d-flex justify-content-center pt-5">
            <h1>Add Card</h1>
          </Col>

          <Form>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Catagory</Form.Label>
              <Form.Control type="text" placeholder="Enter catagory" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Term</Form.Label>
              <Form.Control type="text" placeholder="Enter term" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Definition</Form.Label>
              <Form.Control type="text" placeholder="Enter definition" />
            </Form.Group>
    
            <Button variant="primary" type="submit">
              Submit
            </Button>

          </Form>

        </Row>
      </Container>
    );
  }
}
