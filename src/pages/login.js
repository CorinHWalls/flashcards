import React from "react";
import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class LoginScreen extends Component{
    constructor(props){
        super(props);
    }

    render(){

    return(
     
        <container>
            <row>
                </row>
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

        </container>
        
    )

    }
}