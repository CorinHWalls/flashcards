// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { BrowserRouter as Redirect, Switch, Router } from 'react-router-dom';
import FlashCard from "../pages/flashcard";
import { createBrowserHistory } from 'history'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBvIzSC_8ciredcnDvUdJCJ4ppZ3uWB1A",
  authDomain: "flashcards-20d4f.firebaseapp.com",
  projectId: "flashcards-20d4f",
  storageBucket: "flashcards-20d4f.appspot.com",
  messagingSenderId: "101658307087",
  appId: "1:101658307087:web:2b79038b1c6f75df43117a"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore();

//async api call, this function allows us to use await
//add Data
async function AddFlashCard( card ){

    try {
        const docRef = await addDoc(collection(db, "flashcards"), {
          Category: card.Category,
          Definition: card.Definition,
          Term: card.Term
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

}

const cards = []

// call this when the app loads so the data can already be loaded. 
async function getFlashCards(){
    cards.length = 0; //so the data is not duplicated when this func is called
    const querySnapshot = await getDocs(collection(db, "flashcards"));
querySnapshot.forEach((doc) => {

    cards.push(doc.data());
//   console.log(`${doc.id} => ${doc.data()}`);
});

}

//call this function when you need to display the data
function getData(){
    return cards;
}

const newHistory = createBrowserHistory();


function logIn(email, password){
  console.log("hit");
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(newHistory);
      newHistory.push('/flashcard');
      console.log(user);
      // <Router history={newHistory}>

      // <Switch>
      //   <Redirect to="/flashcard" />
      // </Switch>
      // </Router>

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}





export { firebase, db, getFlashCards, getData, AddFlashCard, logIn }