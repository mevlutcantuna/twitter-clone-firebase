import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGk_jeoWQ4mStVaeL4QvTTjg0bcsHYr1k",
  authDomain: "linkedin-clone-15a05.firebaseapp.com",
  projectId: "linkedin-clone-15a05",
  storageBucket: "linkedin-clone-15a05.appspot.com",
  messagingSenderId: "129955974697",
  appId: "1:129955974697:web:7e2217bb53d79082cfd638",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
