import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <div className="NavMonth">
        <ul className="ul">
          <li className="NavItem">
            <NavLink to="/about">Home</NavLink>
          </li>
          <li className="NavItem">
            <NavLink to="/Home">About</NavLink>
          </li>

          <li className="NavItem">
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
          <li className="NavItem">
            <NavLink to="/delivery">Delivery</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
