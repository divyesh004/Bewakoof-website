// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1sYaR0u83jc8QfNauAaSvUR-4QyeztPA",
  authDomain: "live-project-e2826.firebaseapp.com",
  projectId: "live-project-e2826",
  storageBucket: "live-project-e2826.appspot.com",
  messagingSenderId: "524042588702",
  appId: "1:524042588702:web:cec9cbba80a787fd0a940f"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };