import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoOqOsOoN1SGxe9oQqT0ECxA7bYYpIhcs",
  authDomain: "primeros-pasos-8644a.firebaseapp.com",
  projectId: "primeros-pasos-8644a",
  storageBucket: "primeros-pasos-8644a.appspot.com",
  messagingSenderId: "1015905239421",
  appId: "1:1015905239421:web:b4d0f4ec0c546f63654c14",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
