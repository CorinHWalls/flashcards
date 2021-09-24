import React, { useState, useEffect } from "react";
import {
  getData,
  getFlashCards,
  getJSData,
  getReactData,
} from "../Services/firebase";
import "../styles/Card.css";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router";

import { Container, Row, Col } from "react-bootstrap";
import addCardBtn from "./addCardBtn";

export const FlashCard = () => {
  let [flashCards, setFlashCards] = useState([]);
  let [index, setIndex] = useState(0);
  let [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      getFlashCards();
    }, 500);
    //not sure this will work
    setFlashCards(getData());
    setTimeout(function () {
      setIsLoaded(true);
    }, 1000);
  });

  //Updating states for Next and prev buttons
  const handleNextBtn = (event) => {
    setIndex(++index);

    if (index == flashCards.length - 1) {
      setIndex(++flashCards.length);
    }
  };

  const handlePrevBtn = (event) => {
    if (index === 0) {
      setIndex(flashCards.length - 1);
    } else {
      setIndex(0);
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
        break;
      case "React":
        data = await getReactData();
        break;
      case "HTML":
        console.log("HTML was selected");
        break;
      case "CSS":
        console.log("CSS was selected");
        break;

      default:
        data = getData();
        break;
    }

  
    setIndex(0);
    setFlashCards(data);
  };

  return (
    <>
      <Container>
        <Form>
          <Form.Select
            onChange={handleChange}
            aria-label="Default select example"
          >
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
          </Col>
        </Row>
      </Container>

      <Container className="center">
        <Row>
          <Col>
            <button onClick={handlePrevBtn} className="btn btn-danger">
              Previous
            </button>
          </Col>
          <Col>
            <button onClick={handleNextBtn} className="btn btn-warning">
              Next
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
