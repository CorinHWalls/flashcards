import React, {useState} from 'react';
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { firebase, logIn} from "../Services/firebase";
import { Link } from "react-router-dom";
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
                          <p className="forget">Don't have an account? <Link to="/signup"><a>Sign Up</a></Link></p>  
                     </form>  
                </div>  
           </div>  
      </div>  
        
        </Container>
            </>
        
    )

}