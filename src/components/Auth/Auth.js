import { useContext } from "react";
import { logIn, logOut } from "../../firebase";
import { AppContext } from "../../App";
import "./Auth.css";
import { NavLink } from "react-router-dom";

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {user ? (
        <span>
          <NavLink to="/orders">
            {user.photoURL ? (
              <img
                className="photoURL"
                src={user.photoURL}
                alt={user.displayName}
              />
            ) : null}
          </NavLink>
          <button className="Sign" onClick={logOut}>
            Sign out
          </button>
        </span>
      ) : (
        <span>
          <button className="Sign" onClick={logIn}>
            Sign in
          </button>
        </span>
      )}
    </div>
  );
}