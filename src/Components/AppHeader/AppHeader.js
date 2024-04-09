import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import { removeToken } from "../../helpers";

const AppHeader = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear()
    navigate("/", { replace: true });
    window.location.reload()
  };

  return (
    <div className="header_space">
      <div className="auth_buttons">
        {user ? (
          <>
            <a
              className="auth_button_signUp"
              type="primary"
              onClick={handleLogout}
              href="/"
            >
              Logout
            </a>
            <a 
            className="auth_nav_link"
            href="/plays"
            >
              Plays
            </a>
            <a 
            className="auth_nav_link"
            href="/monologues"
            >
              Monologues
            </a>
            <a 
            className="auth_nav_link"
            href="/home"
            >
              Home
            </a>
          </>
        ) : (
          <>
            <a className="auth_button_login" href="/login" type="link">
              Login
            </a>
            <a
              className="auth_button_signUp"
              href="/register"
              type="primary"
            >
              Register
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default AppHeader;