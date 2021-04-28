import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCKY7Kh9CR9a8k2uPoIg3STOw2h7F6FoWc",
  authDomain: "whatsapp-2-3b0b8.firebaseapp.com",
  projectId: "whatsapp-2-3b0b8",
  storageBucket: "whatsapp-2-3b0b8.appspot.com",
  messagingSenderId: "857484141619",
  appId: "1:857484141619:web:b2776c1af11d814918ef46",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
