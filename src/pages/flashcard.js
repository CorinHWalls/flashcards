import React from "react";
import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { getData, getFlashCards } from "../Services/firebase";

export default class FlashCard extends Component {
  constructor() {
    super(this.props); //required to use this.prop

    //this is referring to the instance of this component
    this.state = {
      flashCards: [],
      index: 0,
      isLoaded: false,
      term: true,
    };
  }

  async componentDidMount() {
    //will run when this component runs
   await getFlashCards();
 const data =  getData();
 this.setState({flashCards : data}) //targeting empty flashcards aray
 this.setState({isLoaded : true})

    // const data = await [
    //   {
    //     Category: "Object",
    //     Definition: "Round bouncy object",
    //     Term: "Ball",
    //   },
    //   {
    //     Category: "Shape",
    //     Definition: "a plane figure with three straight sides and three angles",
    //     Term: "Triangle",
    //   },
    //   {
    //     Category: "Place",
    //     Definition: "An insitution for educating individuals",
    //     Term: "School",
    //   },
    // ];

  }

  render() {
    return (
      <>
        <Container className="center">
          <Row>
            <Col>
              <Card style={{ width: "30rem", },{height: "15rem"}}>
                <Card.Body>
                  <Card.Title>
                    {this.state.isLoaded ? this.state.FlashCards[1].Term : ""}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Category: {this.state.isLoaded ? this.state.FlashCards[1].Category : ""}
                  </Card.Subtitle>
                  <Card.Text>
                    {this.state.isLoaded ? this.state.FlashCards[1].Definition : ""}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container className="center">
          <Row>
            <Col>
              <button className="btn btn-danger">Previous</button>
              <button className="btn btn-primary">See Definition</button>
              <button className="btn btn-warning">Next</button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
