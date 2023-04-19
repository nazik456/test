import About from "./pages/About";
import Delivery from "./pages/Delivery";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import { createContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore/lite";
import { categoryCollection, onAuthChange, productCollection } from "./firebase";
import Contacts from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ThankYou from "./pages/Thankyou";

// Создать контекст, который будет хранить данные.
export const AppContext = createContext({
  categories: [],
  products:[],
// контекст для корзины
cart:{},// содержимое корзинку
setCart: () =>{}, //изменить 

user:null,
});


function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] =useState([]);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || {};
  });

const[user,setUser] = useState([null]);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  useEffect(() => { // выполнить только однажды
    getDocs(categoryCollection) // получить категории
      .then(({ docs }) => { // когда категории загрузились
        setCategories( // обновить состояние
          docs.map(doc => ({ // новый массив
            ...doc.data(), // из свойств name, slug
            id: doc.id // и свойства id
          }))
        )
      });


    getDocs(productCollection) // получить категории
      .then(({ docs }) => { // когда категории загрузились
        setProducts( // обновить состояние
          docs.map(doc => ({ // новый массив
            ...doc.data(), // из свойств name, slug
            id: doc.id // и свойства id
          }))
        )
      });
  }, []);
  onAuthChange (user =>{
    setUser(user);
  })

  return (
    <div className="App">
      <AppContext.Provider value={{ categories , products , cart, setCart }}>
        <Layout>
          <Routes>
        
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/delivery" element={<Delivery/>} />
            <Route path="/categories/:slug" element={<Category />} />
            <Route path="/products/:slug" element={<Product/>} />
            <Route path="/thank-you" element={<ThankYou/>} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;