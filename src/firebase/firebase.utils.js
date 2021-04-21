import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDRRzd3eBohSG-oDni8YX-slHicrukZ4nA",
  authDomain: "amin-clothing-db.firebaseapp.com",
  projectId: "amin-clothing-db",
  storageBucket: "amin-clothing-db.appspot.com",
  messagingSenderId: "1006389312130",
  appId: "1:1006389312130:web:f4531a28480120a36a529b",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
