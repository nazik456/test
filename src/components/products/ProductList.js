import { useContext } from "react";
import { AppContext } from "../../App";
import "./productList.css";
import { NavLink } from "react-router-dom";
export default function productList(){
  const {product} = useContext(AppContext);

  const output = product.map(product =>(
    <div>
      <img src={product.picture} alt={product.name}/>
      <NavLink to={'/products' +product.slug}>
      {product.name}
      </NavLink>
      <span>{product.price}som</span>
    </div>
  ))
  return(

    
    <div className="ProductList">

    </div>
  )
}