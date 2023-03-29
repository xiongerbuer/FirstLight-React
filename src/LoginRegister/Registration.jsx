import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username: ", username);
    console.log("Password: ", password);
    console.log("Confirm Password: ", confirmPassword);
  };

  const validatePassword = () => {
    return password === confirmPassword;
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">
            <FaUser />
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <FaLock />
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">
            <FaLock />
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {!validatePassword() && (
          <p className="error-message">Passwords do not match.</p>
        )}
        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
