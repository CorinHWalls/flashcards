// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import history from "./history";



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


const allCards = []
const jsCards = []
const reactCards = []
const htmlCards = []
const cssCards = []


// call this when the app loads so the data can already be loaded. 
async function getFlashCards(){
    allCards.length = 0; //so the data is not duplicated when this func is called
    jsCards.length = 0; //so the data is not duplicated when this func is called
    reactCards.length = 0; //so the data is not duplicated when this func is called
    htmlCards.length = 0; //so the data is not duplicated when this func is called
    cssCards.length = 0; //so the data is not duplicated when this func is called
    
    const querySnapshot = await getDocs(collection(db, "flashcards"));
    await querySnapshot.forEach((doc) => {
   
      if(doc.data().Category === 'Javascript'){
        jsCards.push(doc.data())
       
      }
      if(doc.data().Category === 'React'){
        reactCards.push(doc.data())
       
      }
      if(doc.data().Category === 'HTML'){
        htmlCards.push(doc.data())
      }
      if(doc.data().Category === 'CSS'){
        cssCards.push(doc.data())
      }

    allCards.push(doc.data());

});

}

//call this function when you need to display the data
function getData(){
    return allCards;
}
function getJSData(){
    return jsCards;
}
function getReactData(){
    return reactCards;
}
function getHTMLData(){
    return htmlCards;
}
function getCSSData(){
    return cssCards;
}


// const categories = query(ref(db, 'flashcards'), equalTo('javascript'));




function logIn(email, password, history){
  console.log("Logging in...");
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)   //issue here not reaching this point
  .then((userCredential) => {
    
    // Signed in 
    const user = userCredential.user;
    
      history.push('/flashcard');
      
    })
    .catch((error) => {
      
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

function signUp(email, password){
  
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}

// function logOut(){
//   const auth = getAuth();
//   if(auth.currentUser != null){
//       auth.signOut().then(() => {
//           console.log('signed out');
//       });
//   }else{
//       alert('Not signed in');
// }





export { firebase, db, getFlashCards, getData, getJSData, getReactData, getHTMLData, getCSSData, AddFlashCard, logIn, signUp }