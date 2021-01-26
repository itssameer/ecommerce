import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyDsNq-tEN_uztiNuHEwohIa02SYOJCb4",
  authDomain: "ecommerce-test-db-9fe1c.firebaseapp.com",
  projectId: "ecommerce-test-db-9fe1c",
  storageBucket: "ecommerce-test-db-9fe1c.appspot.com",
  messagingSenderId: "1045297675387",
  appId: "1:1045297675387:web:2d658ff157265c876776de",
  measurementId: "G-ZGHL5FE2HM",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ propmpt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
