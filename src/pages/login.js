import React, {useState} from 'react';
import { Container, Alert} from "react-bootstrap";
import { firebase, logIn} from "../Services/firebase";
import { Link } from "react-router-dom";
import history from '../Services/history';




export const LoginScreen = () => {
   
let [email, setEmail] = useState("")
let [password, setPassword] = useState(" ")
const [error, setError] = useState("")
const [loading, setLoading] = useState(false)


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
     try{
          setError("")
           setLoading(true)
          logIn(email, password, history);

     } catch{
          setError("Failed to log in")
     }
     setLoading(false)
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
                     <h2>Lets play a game...</h2>  
                     {error && <Alert variant="danger">{error}</Alert>}
                     <form>  
                          <div className="input__box">  
                               <input onChange={handleEmailInput} name='email' type="email" placeholder="Username" />  
                          </div>  
                          <div className="input__box">  
                               <input onChange={handlePasswordInput} name='password' type="password" placeholder="Password" />  
                          </div>  
                          <div className="input__box">  
                               <input disabled={loading} onClick={handleEvent} type="submit" value="Login" />  
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