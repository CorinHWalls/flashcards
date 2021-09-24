import React, {useState} from 'react';
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { firebase, logIn} from "../Services/firebase";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import history from '../Services/history';




export const LoginScreen = () => {
   
let [email, setEmail] = useState("")
let [password, setPassword] = useState(" ")


const handleEmailInput = (event) => {
    setEmail(event.target.value)
}

const handlePasswordInput = (event) => {
    setPassword(event.target.value)
}


const handleEvent = (event) => {
    logIn(email, password, history);
    console.log(email);
    console.log(password);
  } 
    
    
        
    
    return(
        <>
        <Container>
        <Row>
        <Col className="d-flex justify-content-center">
        <h1>L33T Developers Flashcards</h1>
        </Col>
        </Row>
        </Container>

      <Card className="pt-2">
            <Card.Body>
                <h2 className="text-center mb-4">Login</h2>
                <Form>
                    <Form.Group >
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={handleEmailInput} type='email'name="email" required />
                    </Form.Group>

                    <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlePasswordInput} type='Password' name="email"  required />
                    </Form.Group>

                </Form>
                <div className='pt-4'>
                <Button onClick={handleEvent} className='w-100' type='submit'>Login</Button>
                </div>
                    
            </Card.Body>
        </Card>
            <div className="w-100 text-center mt-2">
                Need an account? Signup
            </div>
            </>
        // </Container>
        
    )

}