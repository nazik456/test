import CartList from "../components/CartList/CartList";
import Orderform from "../components/OrderForm/OrderForm";


export default function Cart(){
  return(
  <div className="Cart">
    <h1>Cart</h1>
    <CartList/>
    <Orderform />
    </div>
  )
}