import firebase from 'firebase/compat/app';
import 'firebase/compat/database';    // for realtime database

const firebaseConfig = {
  apiKey: "AIzaSyBztkz5ov3d9_kEcpL6x1T8yMfqIu2DwQU",
  authDomain: "web-tutorial-1b3af.firebaseapp.com",
  projectId: "web-tutorial-1b3af",
  storageBucket: "web-tutorial-1b3af.appspot.com",
  messagingSenderId: "611049069285",
  appId: "1:611049069285:web:23a730ca10407da285d20c",
  measurementId: "G-WLT96DTJWL",
  databaseURL: "https://web-tutorial-1b3af-default-rtdb.firebaseio.com/"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.database();
export default firebase;