// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import { firebase, logIn } from "./Services/firebase";
import React, { useState, useEffect } from "react";

import AddCard from "./pages/addCard";
import FlashCard from "./pages/flashcard";
import SignupScreen from "./pages/signup";
import LoginScreen from "./pages/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router>
          <Switch>
            <Route path="/flashcard">
              <FlashCard />
            </Route>

            <Route path="/">
              <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
              >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                  <LoginScreen />
                </div>
              </Container>
            </Route>

            <Route path="/addcard">
              <AddCard />
            </Route>
          </Switch>
        </Router>
      </BrowserRouter>
    </>
  );
}

export default App;
