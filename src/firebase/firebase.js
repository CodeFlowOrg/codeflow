import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const Config = {
  apiKey: "AIzaSyAc1HwKpWdsEPUBaU0y9mWmla5EU3_vqCQ",
  authDomain: "codeflow-org.firebaseapp.com",
  databaseURL: "https://codeflow-org-default-rtdb.firebaseio.com",
  projectId: "codeflow-org",
  storageBucket: "codeflow-org.appspot.com",
  messagingSenderId: "706543120697",
  appId: "1:706543120697:web:e90a5abaa092a306c778e8",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(Config);

const projectStorage = firebaseApp.storage();
const projectFirestore = firebaseApp.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();
export { projectStorage, projectFirestore, timestamp };
