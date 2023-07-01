import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
   
    apiKey: "",
    authDomain: "auth-84c86.firebaseapp.com",
    projectId: "auth-84c86",
    storageBucket: "auth-84c86.appspot.com",
    messagingSenderId: "380584141206",
    appId: "1:380584141206:web:444d89acd87805f2aebdb7",
    measurementId: "G-2D7KG14DEB"
};
 
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
// export default app;