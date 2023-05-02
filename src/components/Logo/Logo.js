import "./Logo.css";
import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"


export default function Logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
      <img src={logo } alt="logo" className="" />
    
      </NavLink>
    </div>
  );
}