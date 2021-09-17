import React from "react";
import { Component } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { firebase, logIn} from "../Services/firebase";
import { Link } from "react-router-dom";




export default class LoginScreen extends Component{
   

constructor(props){
    super(props)
    
    this.state = { 
        email: '',
        password: '',
       
    }
    
}

handleEmailInput = (event) => {
    this.setState({
        email: event.target.value,
    });

}

handlePasswordInput = (event) => {
    this.setState({
        password: event.target.value,
    });
}


handleEvent = (event) => {
    logIn(this.state.email, this.state.password);
    console.log(this.state.email);
    console.log(this.state.password);
  } 
    
    render(){
        
    
    return(
        <>
        <Container>
        <Row>
        <Col className="d-flex justify-content-center">
        <h1>Flash Cards</h1>
        </Col>
        </Row>
        </Container>

      <Card className="pt-2">
            <Card.Body>
                <h2 className="text-center mb-4">Login</h2>
                <Form>
                    <Form.Group >
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={this.handleEmailInput} type='email'required />
                    </Form.Group>

                    <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={this.handlePasswordInput} type='Password'  required />
                    </Form.Group>

                </Form>
                <div className='pt-4'>
                <Button onClick={this.handleEvent} className='w-100' type='submit'>Login</Button>
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
}