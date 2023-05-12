import NotFound from "./NotFound";
import { AppContext } from "../App";
import { useMatch } from "react-router-dom";
import { useContext } from "react";
export default function Product() {
  const { params } = useMatch("/products/:slug");
  const { products } = useContext(AppContext);
  const product = products.find((product) => product.slug === params.slug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="Product">
      <h1>{product.name}</h1>
      <img width="350 px"  src={product.picture} alt={product.name} />
      <span>{product.price} </span>
      <p>{product.description}  </p> 
    </div>
  );
}
