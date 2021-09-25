import React, { useState, useRef } from "react";
import { Alert, Container } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import {signUp} from '../Services/firebase'





export const SignupScreen = () => {
    
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState("");
    // const [loading, setLoading] = useState(false)

  const handleInputFields = (event) => {
   
      switch (event.target.name) {
          case 'email':
                setEmail(event.target.value);
              break;

          case 'password':
                setPassword(event.target.value);
              break;
          case 'passwordConfirmation':
              setPasswordConfirm(event.target.value);
              break;
      
          default: 
              break;
      }
  }
  
  let history = useHistory()
  
   async function handleSubmit (event) {
     
     //if password does not equal passwordConfirm setError()
     if (password !== passwordConfirm) {
       return setError("Passwords do not match")
      }
      // event.preventDefault(); //stop page from reloading
     
        try {
          setError("")
          // setLoading(true)
          await signUp(email, password)
          // history.push("/")
          
        } catch {
          //if above does not work, setError()
          setError("Failed to create an account")
        }
    // setLoading(false)
    
    }

  

  return (
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
             <h2>Signup </h2>  
             {error && <Alert variant="danger">{error}</Alert>}
             <form>  
                  <div className="input__box">  
                       <input onChange={(event) => setEmail(event.target.value)}  name='email' type="email" placeholder="Email address" required />  
                  </div>  
                  <div className="input__box">  
                       <input onChange={handleInputFields} name='password' type="password" placeholder="Password" required />  
                  </div>  
                  <div className="input__box">  
                       <input onChange={handleInputFields} name='PasswordConfirmation' type="password" placeholder="Password Confirmation" required />  
                  </div>  
                  <div className="input__box">  
                       <input  onClick={handleSubmit} type="submit" value="Signup" />  
      
                  </div>  
                  <p className="forget">Already have an Account? <Link to='/'><a>Click Here</a></Link></p> 
                    
             </form>  
        </div>  
   </div>  
</div>  

</Container>
      {/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control onChange={(event) => setEmail(event.target.value)} type="email" name="email" required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={handleInputFields} type="Password" name="password" required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control onChange={handleInputFields} type="Password" name="passwordConfirmation" required />
            </Form.Group>
          </Form>
          <div className="pt-4">
            <Button onClick={handleSubmit} className="w-100" type="submit">
              Sign Up
            </Button>
          </div>
        </Card.Body>
      </Card> */}
      <div className="w-100 text-center mt-2">
        {/* Already have an account? Log in <Link to='/login'>Log In</Link> */}
      </div>
    </>
  );
};
