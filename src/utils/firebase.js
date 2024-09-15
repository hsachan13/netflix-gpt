// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHdc-xj-MAuq1Q-JSIduSDdw_G8n9Zl5c",
  authDomain: "netflixgpt-60054.firebaseapp.com",
  projectId: "netflixgpt-60054",
  storageBucket: "netflixgpt-60054.appspot.com",
  messagingSenderId: "108703354411",
  appId: "1:108703354411:web:bd19bf242bdc2763e7646e",
  measurementId: "G-CMZYXEHDFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
