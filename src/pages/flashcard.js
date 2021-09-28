import React, { useState, useEffect } from "react";
import {
  getData,
  getFlashCards,
  getJSData,
  getReactData,
  getCSSData,
  getHTMLData
} from "../Services/firebase";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router";
import { Container, Row, Col, Button, Offcanvas, Nav } from "react-bootstrap";
import '../styles/wickedcss.min.css'



export const FlashCard = () => {
  let [flashCards, setFlashCards] = useState(getData());
  let [index, setIndex] = useState(0);
  let [isLoaded, setIsLoaded] = useState(false); 
  let history = useHistory()
  let [show, setShow] = useState(false);  
  let handleClose = () => setShow(false);  //for the Instruction button
  let handleShow = () => setShow(true);     

  ///Handling changes / updates to the page
  useEffect(() => {
    
    setTimeout(function () {
      getFlashCards();
    }, 100);
    setTimeout(function () {
      
      setIsLoaded(true);
    }, 500);
    
  }, [flashCards]);

  //Updating states for Next and prev buttons
  const handleNextBtn = (event) => {
    setIndex(++index);

    if (index === flashCards.length) {
      setIndex(0);
    } 
  };

  const handlePrevBtn = (event) => {
    setIndex(--index);
    if (index <= 0) {
      setIndex(flashCards.length -1);
    } 
  };

  const handleCardFlip = (event) => {
    const card = document.querySelector(".card__inner");
    card.classList.toggle("is-flipped");
  };

  const handleChange = async (event) => {
    let data;
    switch (event.target.value) {
      case "Javascript":
        data = await getJSData();
        console.log(data);
        break;
      case "React":
        data = await getReactData();
        break;
      case "HTML":
        data = await getHTMLData();
        break;
      case "CSS":
        data = await getCSSData();
        break;

      default:
        data = getData();

        break;
    }

    setIndex(0);
    setTimeout(function () {
      setFlashCards(data);
    }, 500);
  };

  const addCard = () =>{
    history.push('/addCard')
  }

  return (
   <>
<Nav className="justify-content-end mt-4 px-5" >
    <Nav.Item>
    <Button onClick={handleShow} variant="outline-warning" size="lg">Instructions</Button>{' '}
    
    </Nav.Item>

    <Nav.Item>
    <Button onClick={addCard} variant="outline-warning mx-5" size="lg">Add Card</Button>{' '}
    </Nav.Item>
  
  </Nav>
    <Container className="section">
      <div className="colour"></div>
      <div className="colour"></div>
      <div className="colour"></div>
      <div className="box">
        <div className="container">
          <div className="form">
            <h2>Flashcards</h2>

            <Row>
              <Col>
            <Form id="dropdown">
              <Form.Select
                onChange={handleChange}
                aria-label="Default select example"
              >
                <option>Choose a Category</option>
                <option value="default">All</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="Javascript">Javascript</option>
                <option value="React">React</option>
              </Form.Select>
            </Form>
              </Col>

            </Row>
          </div>

        {/* FlashCard */}
          <div className="card fadeIn">
            <div onClick={handleCardFlip} className="card__inner">
              <div className="card__face card__face--front">
                {isLoaded ? flashCards[index].Term : ""}
              </div>
              <div className="card__face card__face--back">
                <div className="card__content">
                  <div className="card__header">
                    Category: {isLoaded ? flashCards[index].Category : ""}
                  </div>
                  <div className="card__body">
                    {isLoaded ? flashCards[index].Term : ""}
                    <p>
                      <br />
                      {isLoaded ? flashCards[index].Definition : ""}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="form d-flex justify-content-center">
            <Row>
              <Col>
                <div className="input__box">
                  <input onClick={handlePrevBtn} type="submit" value="Prev" />
                </div>
              </Col>
              <Col>
                <div className="input__box">
                  <input onClick={handleNextBtn} type="submit" value="Next" />
                </div>
              </Col>
            </Row>
          </div>


        </div>
      </div>
    {/* off canvas, next time will create component for it and inject */}
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Flashcard Instructions</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ol>
            <li>
            Choose a category to filter for specific cards
            </li>
            <li>
            Click on the card in the middle of screen to flip it.
            </li>
            <li>
            Press Add card to create a new Card.
            </li>
            <li>
            Use the Next and Prev buttons to cycle through cards
            </li>
          </ol>
         
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
</>
    
  );
};
