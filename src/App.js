// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { firebase, logIn } from './Services/firebase';

import AddCard from './pages/addCard';
import FlashCard from './pages/flashcard';
import Button from '@restart/ui/esm/Button';
import Signup from './pages/signup';
import Login from './pages/login'



function App() {
  return (

    <>
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight : '100vh'}}>
    <div className='w-100' style={{maxWidth :'400px'}}>

  <Signup />

    </div>
    </Container>
    </>
    //   {/* <Router>
    // <Container className='d-flex justify-content-center pt-5'>
    //   <Row>

    //     <Col md={6}>
    // <Link to='/'><Button className='btn btn-primary'>Flashcards</Button></Link>
    //     </Col>

    //     <Col md={6}>
    // <Link to='/addcard'><Button className='btn btn-secondary'>Add Card</Button></Link>
    //     </Col>

    //   </Row>
    // </Container>

    // <Switch>

    //   <Route path='/addcard'>
    //   <AddCard /> 
    //   </Route>

    //   <Route path='/'>
    //   <FlashCard />
    //   </Route>

    // </Switch>

    //   </Router> */}

    // {/* Components */}
    
  );
}

export default App;
