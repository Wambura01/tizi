import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// firebase app configs
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig); // initialize firebase
const auth = getAuth(app); // initialize firebase auth
export const db = getFirestore(app);

// to login with email and password
export const logInWithEmailAndPassword = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        console.log("Logged in successfully!!");
        return userCredentials;
      }
    );

    // return the logged in user
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

// register with email and password
export const registerWithEmailAndPassword = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((userCredentials) => {
      console.log("Logged in successfully!!");
      return userCredentials;
    });
    return user;
  } catch (error) {
    console.log("Error: ", error.message);
  }
};
