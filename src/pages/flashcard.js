import React from "react";
import { Component } from "react";
import { getData, getFlashCards } from "../Services/firebase";
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

export default class FlashCard extends Component {
  constructor(props) {
    super(props); //required to use this.prop

    //Define the initial state:
    this.state = {
      flashCards: [],
      currentCard: {},
      index: 0,
      isLoaded: false,
      term: true,
    };
  }

  async componentWillMount() {

    const currentCards = this.state.flashCards;
    //will run when this component runs
    await getFlashCards();
    this.setState({ flashCards: getData() }); //targeting empty flashcards aray
    this.setState({ isLoaded: true });
    
  }

  componentDidUpdate(){

  }

  handleNextBtn(event) {
    debugger
    // if (this.state.index + 1 == this.state.flashCards.length) {
    //   this.setState({ index: 0 });
    // }
    // if (this.state.index === 1) {
    //   this.setState({ index: 0 });
    // }
    // else{
      // this.setState({ index: 1});
      console.log(this.state.index)
    //}
  }

  handlePrevBtn(event) {
    if (--this.state.index < 0) {
      this.setState({ index: this.state.flashCards.length - 1 });
    }
  }

  render() {
    return (
      <>
        <Container>
          <row>
            <Col>
              <DropdownButton
                id="dropdown-basic-button"
                title="Categories">
                <Dropdown.Item value='html'>HTML</Dropdown.Item>
                <Dropdown.Item value='css'>CSS</Dropdown.Item>
                <Dropdown.Item value='javascript'>Javascript</Dropdown.Item>
                <Dropdown.Item value='react'>React</Dropdown.Item>
                <Dropdown.Item value='angular'>Angular</Dropdown.Item>
                <Dropdown.Item value='c#'>C#</Dropdown.Item>
              </DropdownButton>
            </Col>
          </row>
        </Container>

        <Container className="center">
          <Row>
            <Col>
              <Card style={({ width: "30rem" }, { height: "15rem" })}>
                <Card.Body>
                  <Card.Title>
                    Category:{this.state.isLoaded ? this.state.flashCards[this.state.index].Category : ""}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>

                  {this.state.isLoaded ? this.state.flashCards[this.state.index].Term : ""}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container className="center">
          <Row>
            <Col>
              <button onClick={this.handlePrevBtn} className="btn btn-danger">
                Previous
              </button>
              <button className="btn btn-primary">See Definition</button>
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
