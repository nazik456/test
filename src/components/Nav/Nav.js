import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="Nav">
      <div className="NavMonth">
        </div>
      
      <ul className="ul">
        <li className="NavItem">
          < NavLink to="/hmee" >бумага бумажная и продукция</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/About">концтовары ,товары для офиса</NavLink>
        </li>
        
        <li className="NavItem">
          <NavLink to="/contacts">подарки для сувинера</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/delivery">o компании</NavLink>
        </li>
      </ul>
    </nav>
  );
}