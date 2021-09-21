import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { firebase, AddFlashCard, getFlashCards } from "../Services/firebase";
import { Link } from "react-router-dom";

export default class AddCard extends Component {
  constructor() {
    super();
    this.state = {
      Category: "",
      Definition: "",
      Term: "",
    };
  }

  handleInputFields = (event) => {
    this.setState({
      Category: event.target.value,
      Definition: event.target.value,
      Term: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault(); //stop page from reloading
    AddFlashCard(this.state);
    setTimeout(function(){getFlashCards()}, 3000);
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
              <Form.Control name='category' onChange={this.handleInputFields} type="text" placeholder="Enter catagory" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Term</Form.Label>
              <Form.Control onChange={this.handleInputFields} type="text" placeholder="Enter term" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Definition</Form.Label>
              <Form.Control onChange={this.handleInputFields} type="text" placeholder="Enter definition" />
            </Form.Group>
    
            <Button onClick={this.handleSubmit} variant="primary" type="submit">
              Submit
            </Button>

          </Form>

        </Row>
      </Container>
    );
  }
}
