// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeLF5NldKAR9kw4RcLqQYbbrq7yd05zmM",
  authDomain: "diplom-14a4a.firebaseapp.com",
  projectId: "diplom-14a4a",
  storageBucket: "diplom-14a4a.appspot.com",
  messagingSenderId: "878236939607",
  appId: "1:878236939607:web:b483fe9a7fb0c2bbb8ba12"
};

// Инициализация приложения
const app = initializeApp(firebaseConfig);
// Инициализация базы данных
const db = getFirestore(app);

// Получение списка категорий (коллекции документов)
export const categories = collection(db, 'categories');