import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import Constants from "expo-constants";

const firebaseConfig = {
  apiKey: "AIzaSyCen2amUNprXklnYwUroRm43eLk-sQZ4EM",
  authDomain: "crane-project-id.firebaseapp.com",
  projectId: "crane-project-id",
  storageBucket: "crane-project-id.appspot.com",
  messagingSenderId: "667135312999",
  appId: "1:667135312999:web:b1c6b988544bb8695600c2",
};

initializeApp(firebaseConfig);
export const auth = getAuth();
