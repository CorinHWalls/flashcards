import React from "react";
import { Component } from "react";
import { getData, getFlashCards } from "../Services/firebase";
import CategoryMenu from "./catagoryMenu";
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
      index: 0,
      isLoaded: false,
      term: true,
    };
    //Binding this keyword
    this.handleNextBtn = this.handleNextBtn.bind(this)
    this.handlePrevBtn = this.handlePrevBtn.bind(this)
    this.handleAddCardBtn = this.handleAddCardBtn.bind(this)
  }

  async componentWillMount() {

    //will run when this component runs
    await getFlashCards();
    this.setState({ flashCards: getData() }); //targeting empty flashcards array and dump data
    this.setState({ isLoaded: true });
    
  }


//Updating states for Next and prev buttons
  handleNextBtn(event) {
    
    if (++this.state.index == this.state.flashCards.length) {
      this.setState({ index: 0 });
    }
    else{
      this.setState({ index: 1})
    }

  }
  handlePrevBtn(event) {
    if (--this.state.index < 0) {
      this.setState({ index: this.state.flashCards.length - 1 });
    }
    else{
      this.setState({ index: this.state.flashCards.length - 2 });
    }
  }
  
  handleAddCardBtn(event){
  //go yo add card page
  }

  render() {
    return (
      <>
       <Container>
  
         <CategoryMenu />
         
      </Container>

      <button onClick={this.handleAddCardBtn} className="btn btn-danger">
                Add card
              </button>

    
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
