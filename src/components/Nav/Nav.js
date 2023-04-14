import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="Nav">
      <ul>
        <li className="NavItem">
          <NavLink to="/hmee">Home</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/About">About</NavLink>
        </li>
        
        <li className="NavItem">
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/delivery">Delivery</NavLink>
        </li>
      </ul>
    </nav>
  );
}