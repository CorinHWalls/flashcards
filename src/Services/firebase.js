// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createBrowserHistory } from 'history'
import { getDatabase, ref, query, orderByChild,  } from "firebase/database";

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
   
      if(doc.data() === 'Javascript'){
        jsCards.push(doc.data())
      }
      if(doc.data() === 'React'){
        reactCards.push(doc.data())
      }
      if(doc.data() === 'HTML'){
        htmlCards.push(doc.data())
      }
      if(doc.data() === 'CSS'){
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

const newHistory = createBrowserHistory();


function logIn(email, password){
  console.log("hit");
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)   //issue here not reaching this point
    .then((userCredential) => {
      
      // Signed in 
      const user = userCredential.user;
      console.log('Signed in')
      newHistory.push('/flashcard');
      console.log(user);
    })
    .catch((error) => {
      
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}





export { firebase, db, getFlashCards, getData, getJSData, getReactData, getHTMLData, getCSSData, AddFlashCard, logIn }