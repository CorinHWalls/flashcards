import React, { useState } from "react";
import { Container, Form, Alert } from "react-bootstrap";
import { AddFlashCard, getFlashCards } from "../Services/firebase";
import { useHistory } from "react-router";

export const AddCard = () => {
  let [Category, setCategory] = useState("");
  let [Definition, setDefiniton] = useState("");
  let [Term, setTerm] = useState("");
  let history = useHistory();
  let [error, setError] = useState("");

  ///obj being used to pass properties in addFlashCard function
  let card = {
    Category: Category,
    Definition: Definition,
    Term: Term,
  };

  const enableFields = () =>{
    let inputOne = document.getElementById('inputField1').classList.remove('visuallyhidden');
    let inputTwo = document.getElementById('inputField2').classList.remove('visuallyhidden');
    let cardBtns = document.getElementById('addCardBtns').classList.remove('visuallyhidden');
  }

  const handleInputFields = (event) => {
    if (event.target.name === "Term") {
      setTerm(event.target.value);
    } else if (event.target.name === "Definition") {
      setDefiniton(event.target.value);
    }

    if(event.target.value === ""){
      setError('Enter a term and definition');
    }
  };

  const handleDropdown = (event) => {
    enableFields();
    if (event.target.value === "Javascript") {
      setCategory(event.target.value);
    } else if (event.target.value === "React") {
      setCategory(event.target.value);
    }
      
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //stop page from reloading

    if(Definition === "" && Term === ""  ){
      setError('Enter a term and definition');
    }else if(Term === "") {
      setError('Enter a Term');
    }else if(Definition === ""){
      setError('Enter a Definition');
    } else{
      AddFlashCard(card); //passing obj I created as card
      setTimeout(function () {
        //slowing down getFlashCards
        getFlashCards();
      }, 3000);
      setTimeout(function () {
        window.location.reload(true);
  
      }, 2000)
    }
  };

  const handleCancel = () => {
    history.push('/flashCard');
  }
  

  return (
    <Container className='section'>

<div className="colour"></div>  
      <div className="colour"></div>  
      <div className="colour"></div>  
      <div className="box">  
            <div className="square"></div>  
           <div className="square" ></div>  
           <div className="square" ></div>  
           <div className="square" ></div>  
           <div className="square" ></div>  
           <div className="container">  
                <div className="form">  
                     <h2>Add Card</h2> 
                     {error && <Alert variant="danger">{error}</Alert>} 
                     <Form>
            <Form.Select
              onChange={handleDropdown}
              aria-label="Default select example"
            >
              <option>Choose a Category</option>
              <option value="Javascript">Javascript</option>
              <option value="React">React</option>
            </Form.Select>
          </Form>
                     <form>  
                          <div id='inputField1' className="input__box visuallyhidden">  
                               <input  onChange={handleInputFields} name='Term' type="text" placeholder="Enter term" required/>  
                          </div>  
                          <div id='inputField2' className="input__box visuallyhidden">  
                               <input onChange={handleInputFields} name='Definition' type="text" placeholder="Enter Definition" required />  
                          </div>  
                          <div  className="input__box">  
                               <input id='addCardBtns' className="visuallyhidden" onClick={handleSubmit} type="submit" value="Submit" />  
                              
                               <input onClick={handleCancel} type="submit" value="Cancel" />  
                          </div>  
                     </form>  
                     
                </div>  
           </div>  
      </div>  

      {/* <Row>
        <Col md={12} className="d-flex justify-content-center pt-5">
          <h1>Add Card</h1>
        </Col>

        <Container>
          <Form>
            <Form.Select
              onChange={handleDropdown}
              aria-label="Default select example"
            >
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
              onChange={handleInputFields}
              type="text"
              placeholder="Enter term"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Definition</Form.Label>
            <Form.Control
              name="Definition"
              onChange={handleInputFields}
              type="text"
              placeholder="Enter definition"
            />
          </Form.Group>

          <Button onClick={handleSubmit} variant="primary" type="submit">
            Submit
          </Button>

          <Button variant="primary" type="submit">
            Cancel
          </Button>
        </Form>
      </Row> */}
    </Container>
  );
};
