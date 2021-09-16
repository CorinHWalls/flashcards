import React from "react";
import { Component } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { logIn } from "../Services/firebase";

let email = document.getElementById('email');
let password = document.getElementById('password');
let login = document.getElementById('login');

export default class Login extends Component{
    constructor(props){
        super(props);
    }

    render(){

    return(
      <Container className="d-flex align-items-center justify-content-center" style={{minHeight : '100vh'}}>
      <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Login</h2>
                <Form>
                    <Form.Group id='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email'  required />
                    </Form.Group>

                    <Form.Group id='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='Password' required />
                    </Form.Group>

                </Form>
                <div className='pt-4'>
                <Button id='login' className='w-100' type='submit'>Login</Button>
                </div>
                    
            </Card.Body>
        </Card>
            <div className="w-100 text-center mt-2">
                Need an account? Click here.
            </div>
        </Container>
        
    )

    }
}