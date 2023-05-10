import { NavLink } from "react-router-dom";
import "./Nav.css";


export default function Nav() {
  return (
    <nav className="Nav">
      <div className="NavMonth">
        </div>
  
      <ul className="ul">
        <li className="NavItem">
          
          < NavLink to="/about"    >About</NavLink>
    
        </li>
        <li className="NavItem">
          <NavLink to="/Home">Home</NavLink>
        </li>
        
        <li className="NavItem">
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/delivery">About Company</NavLink>
        </li>
      </ul>
    </nav>
  );
}