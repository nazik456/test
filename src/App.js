import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import { createContext, useEffect, useState } from "react";
import About from "./pages/About";

import {
  onAuthChange,
  onCategoriesLoad,
  onOrdersLoad,
  onProductsLoad,
  
} from "./firebase";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";



// Создать контекст, который будет хранить данные.
export const AppContext = createContext({
  categories: [],
  products: [],
  orders: [],

  // контекст для корзины
  cart: {}, // содержимое корзинки
  setCart: () => {}, // изменить содержимое корзики

  user: null,
});

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    onCategoriesLoad(setCategories);
    onProductsLoad(setProducts);
    onOrdersLoad(setOrders);

    onAuthChange((user) => {
      if (user) {
        user.isAdmin = user.email === "samagatovanazik0@gmail.com";
      }

      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider
        value={{ categories, products, cart, setCart, user, orders }}
      >
        <Layout>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contacts" element={<h1>Contacts</h1>} />
            <Route path="/delivery" element={<h1>Delivery</h1>} />
            <Route path="/categories/:slug" element={<Category />} />
            <Route path="/products/:slug" element={<Product />} />
            <Route path="/Thankyou" element={<ThankYou />} />
            <Route path="/orders" element={<orders/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<NotFound />} />  
   
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;