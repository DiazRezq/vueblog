import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPqHp9LyuluKJ_x5mveARUDJM9Sb8_tK0",
  authDomain: "vueblog-f6d40.firebaseapp.com",
  projectId: "vueblog-f6d40",
  storageBucket: "vueblog-f6d40.firebasestorage.app",
  messagingSenderId: "108066864353",
  appId: "1:108066864353:web:ad15b621b4657049b64ba0",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };
