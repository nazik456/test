import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";
import AddCotegory from "../AddCotegory/AddCotegory";
import DeleteCategory from "../DeleteCategory/DeleteCategory";
import "./CategoryList.css";

export default function CategoryList() {
  const { categories } = useContext(AppContext);

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={`/categories/${category.slug}`}>
        {category.name}
      </NavLink>
 
      <DeleteCategory category={category}/>
    </li>
  ));

  return (
    <div className="CategoryList">
      
      <h3>Categories</h3>
      <ul>{output}</ul>
      <AddCotegory/>
    </div>
  );
}