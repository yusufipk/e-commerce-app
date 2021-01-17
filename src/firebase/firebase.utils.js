import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA5Fnj_p8HEmnyZs59BhTWDXnaik4WXGeg",
  authDomain: "crwn-db-41b08.firebaseapp.com",
  projectId: "crwn-db-41b08",
  storageBucket: "crwn-db-41b08.appspot.com",
  messagingSenderId: "751010391873",
  appId: "1:751010391873:web:828be67008015c5035e3c0",
  measurementId: "G-7T5T9FP0TH",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
