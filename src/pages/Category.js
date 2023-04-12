import { useMatch } from "react-router";
import NotFound from "./NotFound";
import { AppContext } from "../App";
import { useContext } from "react";

export default function Category(){
  const {params} = useMatch("/categories/:slug");
  
   const {categories} = useContext(AppContext);

   
  const category  = categories.find(
    (category) => category.slug === params.slug
  );
  if (!category) {
    return<NotFound/>
  }
  return(
    <div>
      <h1>{category.name}</h1>
      <productsList />
      
    </div>
  )
}
