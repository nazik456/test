import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="Nav">
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
