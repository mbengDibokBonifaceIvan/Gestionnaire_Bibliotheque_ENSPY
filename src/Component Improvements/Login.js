import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuer la validation du formulaire ici
    if (email && password) {
      setValidationError("");
      navigate("/accueil");
    } else {
      setValidationError("Oups!!! Email and/or password incorrect");
    }
  };

  return (

    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="********"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {validationError && (
          <p className="error-message">{validationError}</p>
        )}
        <button type="submit" className="login-button">Log In</button>
      </form>
      <button
        className="link-button"
        onClick={() => navigate("/registrationValidation")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};

export default Login;