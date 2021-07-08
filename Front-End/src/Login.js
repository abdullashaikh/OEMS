import Axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDataLayerValue } from "./DataLayer";
import "./Login.css";
function Login() {
  const [{ token }, dispatch] = useDataLayerValue();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitLogin = (e) => {
    e.preventDefault();
    // console.log(email, password);

    Axios.post("http://localhost:3300/login/teacher", {
      email: email,
      password: password,
    }).then((data) => {
      if (data.status == 200) {
        dispatch({ type: "SET_TOKEN", token: data.data.body.data });
        history.push("/TeacherDashboard");

        // console.log(data.data.body.data);
      } else if (data.status == 400) {
        alert("Data Not Found");
      }
    });
  };
  return (
    <div className="login">
      <div className="login_container">
        <h1>Sign-in</h1>
        <form method="post" onSubmit={submitLogin}>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login_SignIn_button">
            Login
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's-Clone-App Conditions of Use and
          Privacy Notice.
        </p>
        <button className="login_register_button">Create Account</button>
      </div>
    </div>
  );
}

export default Login;
