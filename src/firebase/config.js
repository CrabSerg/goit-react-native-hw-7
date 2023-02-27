// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyBBG6UT6Bc9CuHEmqJJoJy7b4vbqk445IU",
  authDomain: "fir-20dc4.firebaseapp.com",
  projectId: "fir-20dc4",
  storageBucket: "fir-20dc4.appspot.com",
  messagingSenderId: "1067126844759",
  appId: "1:1067126844759:web:4cae5193021def9d13a212",
  measurementId: "G-7M23EHSQG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };

export const firestore = getFirestore(app);
