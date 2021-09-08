import React from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };
  return (
    <nav className="navbar navbar-inverse bg-dark">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="text-decoration-none text-white">
            All heros in one <span className="text-primary">App</span>
          </Link>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <button
              className="glyphicon glyphicon-log-in btn btn-danger"
              onClick={logout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
