import React, { useState } from "react";
import { Container, Form, Alert, Toast } from "react-bootstrap";
import { AddFlashCard, getFlashCards } from "../Services/firebase";
import { useHistory } from "react-router";

export const AddCard = () => {
  let [Category, setCategory] = useState("");
  let [Definition, setDefiniton] = useState("");
  let [Term, setTerm] = useState("");
  let history = useHistory();
  let [error, setError] = useState("");
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

  ///obj being used to pass properties in addFlashCard function
  let card = {
    Category: Category,
    Definition: Definition,
    Term: Term,
  };

  const enableFields = () => {
    let inputOne = document
      .getElementById("inputField1")
      .classList.remove("visuallyhidden");
    let inputTwo = document
      .getElementById("inputField2")
      .classList.remove("visuallyhidden");
    let cardBtns = document
      .getElementById("addCardBtns")
      .classList.remove("visuallyhidden");
  };

  const disableFields = () => {
    let inputOne = document
      .getElementById("inputField1")
      .classList.add("visuallyhidden");
    let inputTwo = document
      .getElementById("inputField2")
      .classList.add("visuallyhidden");
    let cardBtns = document
      .getElementById("addCardBtns")
      .classList.add("visuallyhidden");
    let cancelBtn = document
    .getElementById("cancelBtn")
    .classList.add("visuallyhidden");
    let form = document
    .getElementById("form")
    .classList.add("visuallyhidden");
  }

  const handleInputFields = (event) => {
    if (event.target.name === "Term") {
      setTerm(event.target.value);
    } else if (event.target.name === "Definition") {
      setDefiniton(event.target.value);
    }

    if (event.target.value === "") {
      setError("Enter a term and definition");
    }
  };

  const handleDropdown = (event) => {
    enableFields();
    if (event.target.value === "Javascript") {
      setCategory(event.target.value);
    } else if (event.target.value === "React") {
      setCategory(event.target.value);
    } else if (event.target.value === "HTML") {
      setCategory(event.target.value);
    } else if (event.target.value === "CSS") {
      setCategory(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //stop page from reloading

    if (Definition === "" && Term === "") {
      setError("Enter a term and definition");
    } else if (Term === "") {
      setError("Enter a Term");
    } else if (Definition === "") {
      setError("Enter a Definition");
    } else {
      AddFlashCard(card); //passing obj I created as card
      disableFields(); //disabling fields and buttons
      setShowA(true); //setting toast to true
      toggleShowA(); // displaying toast
      setTimeout(function () {
        //slowing down getFlashCards
        getFlashCards();
      }, 1000);
    }
    setTimeout(function () {
      window.location.reload(true);
    }, 2000);
  };

  const handleCancel = () => {
    history.push("/flashCard");
  };

  return (
    <>
      <Container className="section">
        <div className="colour"></div>
        <div className="colour"></div>
        <div className="colour"></div>
        <div className="box">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="container">
            <div className="form">
              <h2>Add Card</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form>
                <Form.Select
                  onChange={handleDropdown}
                  aria-label="Default select example"
                  id='form'
                >
                  <option>Choose a Category</option>
                  <option value="Javascript">Javascript</option>
                  <option value="React">React</option>
                  <option value="HTML">HTML</option>
                  <option value="CSS">CSS</option>
                </Form.Select>
              </Form>
              <form>
                <div id="inputField1" className="input__box visuallyhidden">
                  <input
                    onChange={handleInputFields}
                    name="Term"
                    type="text"
                    placeholder="Enter term"
                    required
                  />
                </div>
                <div id="inputField2" className="input__box visuallyhidden">
                  <input
                    onChange={handleInputFields}
                    name="Definition"
                    type="text"
                    placeholder="Enter Definition"
                    required
                  />
                </div>
                <div className="input__box">
                  <input
                    id="addCardBtns"
                    className="visuallyhidden test"
                    onClick={handleSubmit}
                    type="submit"
                    value="Submit"
                  />

                  <input className="" id='cancelBtn' onClick={handleCancel} type="submit" value="Cancel" />
                </div>

                <div>
                <Toast show={showA} onClose={toggleShowA}>
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">Flashcard Alert!</strong>
                    {/* <small>1 second ago</small> */}
                  </Toast.Header>
                  <Toast.Body>
                    A new card has been successfully added
                  </Toast.Body>
                </Toast>
                </div>

              </form>
            </div>
          </div>
        </div>
      </Container>

   
    </>
  );
};
