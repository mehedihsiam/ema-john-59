import { initializeApp } from "firebase/app";
import firebaseConfig from "./fireBase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;

/*
steps for firebase Authentication
--------------------------------
1. Create a project in firebase
2. Create Web app
3. get configeration
4. initialize firebase
5. Enable Authentication Mathod
*/