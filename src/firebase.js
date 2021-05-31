import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnX95OL1SvLTE7IX5RFjOgepVM_YH9Hy8",
  authDomain: "twitter-clone-redux.firebaseapp.com",
  projectId: "twitter-clone-redux",
  storageBucket: "twitter-clone-redux.appspot.com",
  messagingSenderId: "459994750881",
  appId: "1:459994750881:web:21cecadd81399b921ef5e0",
  measurementId: "G-XTC6VSG942"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
