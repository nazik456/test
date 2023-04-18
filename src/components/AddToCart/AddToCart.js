import { useContext } from "react";
import "./AddToCart.css";
import { AppContext } from "../../App";

export default function AddToCart({ product }){
const { cart , setCart} = useContext(AppContext);

function onAddToCartClick(){
  const gty = cart[product.id] ? cart[product.id] + 1 : 1;
  setCart({
    ...cart, // положить текущее содержание корзинку
    [product.id]: gty //добавить текущий товар
});
}

  return(
    <div className="AddToCart">
      {cart[product.id] ? cart[product.id] : 0}
      <button onClick={onAddToCartClick}> AddToCart</button>
    </div>
  )
}