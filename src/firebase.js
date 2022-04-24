// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
impoty {getAuth} from "firebase/auth"

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcdHO-IuqtQiqZxOEAP3jKJ6tEnoyuRck",
  authDomain: "fb-react-2022.firebaseapp.com",
  projectId: "fb-react-2022",
  storageBucket: "fb-react-2022.appspot.com",
  messagingSenderId: "532041078831",
  appId: "1:532041078831:web:f8853d75346b8620080eda"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)