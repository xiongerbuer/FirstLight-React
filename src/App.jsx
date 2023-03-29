import React from "react";
// import logo from './logo.svg';
import './App.css';
// import LoginRegister from './LoginRegister/LoginRegister';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./LoginRegister/Login.jsx";
import Registration from "./LoginRegister/Registration.jsx";

function App() {
  return (
    <Router>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
      <div className="container">
        <Routes>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
        </Routes>
      </div>
    </Router>
  );
  //  return (
  //   <LoginRegister></LoginRegister>
  //  );
}

export default App;
