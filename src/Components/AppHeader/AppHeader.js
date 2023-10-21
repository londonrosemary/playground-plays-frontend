import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import { removeToken } from "../../helpers";

const AppHeader = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/signin", { replace: true });
  };

  return (
    <div className="header_space">
      <button className="header_space_brand" href="/home" type="link">

      </button>
      <div className="auth_buttons">
        {user ? (
          <>
            <div>
                Header
            </div> 
            <button
              className="auth_button_signUp"
              type="primary"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button className="auth_button_login" href="/login" type="link">
              Login
            </button>
            <button
              className="auth_button_signUp"
              href="/register"
              type="primary"
            >
              Register
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AppHeader;