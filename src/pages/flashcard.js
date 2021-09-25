import React, { useState, useEffect } from "react";
import {
  getData,
  getFlashCards,
  getJSData,
  getReactData,
} from "../Services/firebase";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import addCardBtn from "./addCardBtn";




export const FlashCard = () => {
  let [flashCards, setFlashCards] = useState(getData());
  let [index, setIndex] = useState(0);
  let [isLoaded, setIsLoaded] = useState(false);

  ///Handling changes
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
    } else {
      console.log("nothing left in array");
    }
  };

  const handlePrevBtn = (event) => {
    if (index <= 0) {
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
        console.log(data);
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
        console.log("All Category");
        break;
    }

    setIndex(0);
    setTimeout(function () {
      setFlashCards(data);
    }, 500);
  };

  return (
    <Container className="section">
      <div className="colour"></div>
      <div className="colour"></div>
      <div className="colour"></div>
      <div className="box"> 
        <div className="container">
          <div className="form">
            <h2>Flashcards</h2>
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
          </div>

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

            <div className="input__box">  
                       <input type="submit" value="Prev" />  
      
                  </div> 
            <button onClick={handlePrevBtn} className="btn btn-danger mt-5">
              <img src="../assets/left-arrow.png" alt="" srcset="" />
            </button>
            <button onClick={handleNextBtn} className="btn btn-warning mt-5" >
              Next
            </button>
        </div>
      </div>
    </Container>

    
  );
};
