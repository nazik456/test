import { useContext } from "react";
import { AppContext } from "../../App";
import "./productsList.css";
import { NavLink } from "react-router-dom";
export default function productsList(){
  const {products} = useContext(AppContext);

  const output = products.map(products =>(
    <div>
      <img src={products.picture} alt={products.name}/>
      <NavLink to={'/products' +products.slug}>
      {products.name}
      </NavLink>
      <span>{products.price}som</span>
    </div>
  ))
  return(

    
    <div className="ProductsList">

    </div>
  )
}