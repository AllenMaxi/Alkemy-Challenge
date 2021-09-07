import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./login.css";
import { useFormik } from "formik";

const Login = () => {
  const history = useHistory();
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: { email: "", password: "" },
  });

  const lastPath = localStorage.getItem("lastPath") || "/";

  const { email, password } = formik.values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      setError("Please enter your email");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else if (password === "") {
      setError("Please enter your password");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      const token = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });
      if (token.data.includes("401")) {
        setError("You do not have permissions");
      } else {
        localStorage.setItem("token", token.data);
        history.replace(lastPath);
      }
    }
  };

  return (
    <div id="login">
      <h3 className="text-center text-dark pt-5">Login form</h3>
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <form id="login-form" className="form" onSubmit={handleSubmit}>
                <h3 className="text-center text-info">Login</h3>
                <div className="form-group">
                  <label htmlFor="username" className="text-info">
                    Username:
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="username"
                    className="form-control"
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="text-info">
                    Password:
                  </label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="form-group">
                  {error ? <h3 className="text-danger">{error}</h3> : null}
                  <input
                    type="submit"
                    name="submit"
                    className="btn btn-info btn-md mt-4"
                    value="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
