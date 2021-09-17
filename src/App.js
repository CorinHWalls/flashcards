// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Container} from 'react-bootstrap';
import { firebase, logIn } from './Services/firebase';

import AddCard from './pages/addCard';
import FlashCard from './pages/flashcard';
import SignupScreen from './pages/signup';
import LoginScreen from './pages/login'


function App() {


  return (
    <>

    <Container className="d-flex align-items-center justify-content-center" style={{minHeight : '100vh'}}>
    <div className='w-100' style={{maxWidth :'400px'}}>
  <LoginScreen />
    </div>
    </Container>
    </>
   
  );
}

export default App;
