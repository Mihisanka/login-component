

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth }  from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  // apiKey: ,
  // authDomain: ,
  // projectId:,
  // storageBucket: ,
  // messagingSenderId: ,
  // appId: 
};


// const app = initializeApp(firebaseConfig);
const app = firebase. initializeApp(firebaseConfig);
export const db = app.firestore();
// export const analytics = getAnalytics(app);
// export const auth = getAuth(app);
