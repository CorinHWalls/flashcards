import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { firebase, AddFlashCard, getFlashCards } from "../Services/firebase";
import { Link } from "react-router-dom";

export default class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Category: "",
      Definition: "",
      Term: "",
    };
  }
  
  handleInputFields = (event) => {
    
    if (event.target.value === "Term") {
      
      this.setState({ Term: event.target.value });
      
    } else if (event.target.value === "Definition") {
      
      this.setState({ Definition: event.target.value });

    }
    
  };
  
  
  handleDropdown = (event) => {
    console.log(event);
    
    if (event.target.value === "Javascript") {
      this.setState({ Category: "Javascript" });
      
    } 
    else if (event.target.value === "React") {
      this.setState({ Category: "React" });
    }
    
  };
  
  handleSubmit = (event) => {
    event.preventDefault(); //stop page from reloading
    AddFlashCard(this.state);
    setTimeout(function () {
      getFlashCards();
    }, 3000);
  };
  
  render() {

    // controls category title
    const title = <h1>Category Selected: {this.state.Category}</h1>

    return (
      <Container>
        <Row>
          <Col md={12} className="d-flex justify-content-center pt-5">
            <h1>Add Card</h1>
          </Col>

          <Container>
          <Form>
            <Form.Select onChange={this.handleDropdown} aria-label="Default select example">
              <option>Choose a Category</option>
              <option value="Javascript">Javascript</option>
              <option value="React">React</option>
            </Form.Select>
          </Form>
        </Container>

          <Form className="mt-5">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Term</Form.Label>
              <Form.Control
                name="Term"
                onChange={this.handleInputFields}
                type="text"
                placeholder="Enter term"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Definition</Form.Label>
              <Form.Control
                name="Definition"
                onChange={this.handleInputFields}
                type="text"
                placeholder="Enter definition"
              />
            </Form.Group>
            

            <Button onClick={this.handleSubmit} variant="primary" type="submit">
              Submit
            </Button>

            <Button variant="primary" type="submit">
              Cancel
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
