import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBYo4JsglrqzZpL9Vlvw_SPxrYfre214ns",
  authDomain: "twitter-clone-77fff.firebaseapp.com",
  projectId: "twitter-clone-77fff",
  storageBucket: "twitter-clone-77fff.appspot.com",
  messagingSenderId: "284304251414",
  appId: "1:284304251414:web:416f48d35e2650039df337"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
