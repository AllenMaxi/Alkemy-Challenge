import React from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };
  return (
    <section className="bg-black">
      <div className="text-center">
        <Link to="/" className="text-decoration-none">
          <h2 className="text-info">Let this adventure begin</h2>
        </Link>
      </div>
      <div>
        <button className="btn btn-danger mt-3 mb-3" onClick={logout}>
          Logout
        </button>
      </div>
    </section>
  );
};

export default Navbar;
