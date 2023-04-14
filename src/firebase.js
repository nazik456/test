// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVy9N-EmDAJVRJGPZKTDfN9h4RxJKLrX0",
  authDomain: "test-b6923.firebaseapp.com",
  projectId: "test-b6923",
  storageBucket: "test-b6923.appspot.com",
  messagingSenderId: "886633197163",
  appId: "1:886633197163:web:f877f81723a946bdf44b2e"
};

// Инициализация приложения
const app = initializeApp(firebaseConfig);
// Инициализация базы данных
const db = getFirestore(app);

// Получение списка категорий (коллекции документов)
export const categoryCollection  = collection(db, 'categories');
export const productCollection = collection(db,'products');