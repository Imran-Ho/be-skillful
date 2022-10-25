// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZcrXMdzrl99yAoShFkjUZTr2vRYD147g",
  authDomain: "be-skillful.firebaseapp.com",
  projectId: "be-skillful",
  storageBucket: "be-skillful.appspot.com",
  messagingSenderId: "744538448711",
  appId: "1:744538448711:web:22421fa967c041734f6262"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;