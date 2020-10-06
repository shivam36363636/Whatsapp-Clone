import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuR7_8GRcUaWb_mASrt_NbXLAceRP2jWw",
  authDomain: "whatsapp-93.firebaseapp.com",
  databaseURL: "https://whatsapp-93.firebaseio.com",
  projectId: "whatsapp-93",
  storageBucket: "whatsapp-93.appspot.com",
  messagingSenderId: "726219080655",
  appId: "1:726219080655:web:93d200ea28cf638e9508ba",
  measurementId: "G-NHWB1N64LE"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;