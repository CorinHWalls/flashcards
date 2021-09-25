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
    console.log(email);
}

const handlePasswordInput = (event) => {
    
    setPassword(event.target.value)
   console.log(password);
}


const handleEvent = (event) => {
    event.preventDefault()
    logIn(email, password, history);
    console.log("this is history ", history)

  } 
    
    
        
    
    return(
        <>
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
                     <h2>Login </h2>  
                     <form>  
                          <div className="input__box">  
                               <input onChange={handleEmailInput} name='email' type="email" placeholder="Username" />  
                          </div>  
                          <div className="input__box">  
                               <input onChange={handlePasswordInput} name='password' type="password" placeholder="Password" />  
                          </div>  
                          <div className="input__box">  
                               <input onClick={handleEvent} type="submit" value="Login" />  
                          </div>  
                          <p className="forget">Forgot Password? <a href="#">Click Here</a></p>  
                          <p className="forget">Don't have an account? <a href="#">Sign Up</a></p>  
                     </form>  
                </div>  
           </div>  
      </div>  
        

      {/* <Card className="pt-2">
            <Card.Body>
                <h2 className="text-center mb-4">Login</h2>
                <Form>
                    <Form.Group >
                    <Form.Label>Email</Form.Label>
                    <Form.Control  onChange={handleEmailInput} type='email'name="email" required />
                    </Form.Group>

                    <Form.Group  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="input input__box" onChange={handlePasswordInput} type='Password' name="email"  required />
                    </Form.Group>

                </Form>
                <div className='pt-4'>
                <Button onClick={handleEvent} className='w-100' type='submit'>Login</Button>
                </div>
                    
            </Card.Body>
        </Card>
            <div className="w-100 text-center mt-2">
                Need an account? Signup
            </div> */}

        </Container>
            </>
        
    )

}