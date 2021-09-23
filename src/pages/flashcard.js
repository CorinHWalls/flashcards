import React from "react";
import { Component } from "react";
import {
  getData,
  getFlashCards,
  getJSData,
  getReactData,
} from "../Services/firebase";
import ReactCardFlip from "react-card-flip";
import "../styles/Card.css";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router";

import {
  Container,
  Row,
  Col,
  Card,
  Dropdown,
  DropdownButton,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import addCardBtn from "./addCardBtn";

export default class FlashCard extends Component {
  constructor(props) {
    super(props); //required to use this.prop

    //Define the initial state:
    this.state = {
      flashCards: [],
      index: 0,
      isLoaded: false,
      term: true,
    };
  }

  async componentWillMount() {
    //will run when this component runs
    await getFlashCards();
    this.setState({ flashCards: getData() }); //targeting empty flashcards array and dump data
    this.setState({ isLoaded: true });
  }

  //Updating states for Next and prev buttons
  handleNextBtn = (event) => {

    this.setState({index: this.state.index +1});

    if (this.state.index == this.state.flashCards.length -1) {
      this.setState({ index: this.state.flashCards.length + 1 });
      this.setState({index: 0})
    } 
  };

  handlePrevBtn = (event) => {
    if (this.state.index === 0) {
      this.setState({ index: this.state.flashCards.length - 1 });
    } else {
      this.setState({ index: 0 });
    }
  };

 

  handleCardFlip = (event) => {
    const card = document.querySelector(".card__inner");
    card.classList.toggle("is-flipped");
  };

  handleChange = async (event) => {

    let data;
    switch (event.target.value) {
      case "Javascript":
          data = await getJSData();
        break;
      case "React":
          data = await getReactData();
        break;
      case "HTML":
        console.log('HTML was selected')
        break;
      case "CSS":
                console.log('CSS was selected')
        break;
    
      default:
         data = getData();
        break;
    }

    this.setState({
      flashCards: data,
      index: 0
    })
  }

  render() {
    return (
      <>
        <Container>
          <Form>
            <Form.Select onChange={this.handleChange} aria-label="Default select example">
              <option>Choose a Category</option>
              <option value="default">All</option>
              <option value="Javascript">Javascript</option>
              <option value="React">React</option>
            </Form.Select>
          </Form>
        </Container>

        

        <Container className="center">
          <Row>
            <Col>
              <div className="card">
                <div onClick={this.handleCardFlip} className="card__inner">
                  <div className="card__face card__face--front">
                    {this.state.isLoaded
                      ? this.state.flashCards[this.state.index].Term
                      : ""}
                  </div>
                  <div className="card__face card__face--back">
                    <div className="card__content">
                      <div className="card__header">
                        Category:{" "}
                        {this.state.isLoaded
                          ? this.state.flashCards[this.state.index].Category
                          : ""}
                      </div>
                      <div className="card__body">
                        {this.state.isLoaded
                          ? this.state.flashCards[this.state.index].Term
                          : ""}
                        <p>
                          <br />
                          {this.state.isLoaded
                            ? this.state.flashCards[this.state.index].Definition
                            : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="center">
          <Row>
            <Col>
              <button onClick={this.handlePrevBtn} className="btn btn-danger">
                Previous
              </button>
            </Col>
            <Col>
              <button onClick={this.handleNextBtn} className="btn btn-warning">
                Next
              </button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
