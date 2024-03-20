

// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // import { getAuth }  from "firebase/auth";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';

// const firebaseConfig = {
//   // apiKey: ,
//   // authDomain: ,
//   // projectId:,
//   // storageBucket: ,
//   // messagingSenderId: ,
//   // appId: 
// };


// // const app = initializeApp(firebaseConfig);
// const app = firebase. initializeApp(firebaseConfig);
// export const db = app.firestore();
// // export const analytics = getAnalytics(app);
// // export const auth = getAuth(app);


import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, remove, set } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// First configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL:"",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};


// Initialize Firebase apps with unique names
const app = initializeApp(firebaseConfig, "app1"); 

// Export databases and storage
export const db = getDatabase(app);
export const storage = getStorage(app);


// Define the 'off' function
export const off = (ref, callback) => {
  // Implement your logic for unsubscribing from realtime updates here
};

// Export database functions
export { ref, onValue, set, remove };
