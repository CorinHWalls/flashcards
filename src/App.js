//Everything in the App gets passed down to the children components ex: Routes, css, etc. 
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Switch, Route} from "react-router-dom";
import React from "react";
import { AddCard } from "./pages/addCard";
import { FlashCard } from "./pages/flashcard";
import { SignupScreen } from "./pages/signup";
import { LoginScreen } from "./pages/login";
import history from "./Services/history"; //using this because login function is in the firebase component
import "./styles/layout.css";
import "./styles/Card.css";


// import { useHistory } from "react-router-dom";

function App() {
  return (
    <>
 
      <Router history={history}>
        <Switch>
          {/* Main Login Route */}
          <Route exact path="/" component >
            <LoginScreen history={history} />
          </Route>

          {/* Signin Route */}
          <Route path="/Signup" component={SignupScreen} />

          {/* FlashCard Route */}
          <Route exact path="/flashcard">
            <FlashCard />
          </Route>

          {/* Add Card route */}
          <Route path="/addcard" component={AddCard} />
      
  
        </Switch>
      </Router>
    </>
  );
}

export default App;
