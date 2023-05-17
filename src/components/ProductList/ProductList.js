import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import "./ProductList.css";
import AddToCart from "../AddToCart/AddToCart";
import AddProduct from "../AddProduct/Addproduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);

  const output = products
    .filter((product) => product.category === category.id)
    .map((product) => (
      <div key={product.id} className="Products">
        <div className="div-inside-product">
          <div className="picture-wrap">
            <img
              className="picture picture--main"
              loading="eager"
              width="300px"
              src={product.picture}
              alt={product.name}   
            />
            <img
              className="picture picture--hover"
              loading="eager"
              width="300px"
              src={product.picture2}
              alt={product.name}
            />
          </div>
          <div className="Pro">
            <NavLink className="nav" to={"/products/" + product.slug}>
              {product.name}
            </NavLink>
            <span className="price-in-product">{product.price} </span>
            <AddToCart product={product} />
            <DeleteProduct product={product} />
          </div>
        </div>
      </div>
    ));

  return (
    <div className="ProductList">
      {output}
      <AddProduct category={category} />
    </div>
  );
}
