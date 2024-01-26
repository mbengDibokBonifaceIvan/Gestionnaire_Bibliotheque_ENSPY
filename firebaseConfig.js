import { initializeApp } from "firebase/compat/app";
//import { firebase } from '@firebase/app'
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getStorage } from 'firebase/storage';


  
const firebaseConfig = {
  apiKey: "AIzaSyAycPH0e54OEuQKZHJlJVBzrl8PJwE5eEw",
  authDomain: "test-b1637.firebaseapp.com",
  projectId: "test-b1637",
  storageBucket: "test-b1637.appspot.com",
  messagingSenderId: "912702084020",
  appId: "1:912702084020:web:7c4470b95d458da35558e1",
  measurementId: "G-PWEJXF3Q4M"
};

// Initialize Firebase
const apple = initializeApp(firebaseConfig);
//const firebaseApp = firebase.initializeApp(firebaseConfig);
//export const auth = getAuth(firebaseApp)
//export const storage= getStorage(firebaseApp)

export const auth = getAuth(apple)
export const storage= getStorage(apple)

