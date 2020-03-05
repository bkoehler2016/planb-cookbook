import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import logo from "../assets/secret-cookbook-logo.png";

const Navigation = ({ history }) => {
  const signOut = () => {
    localStorage.removeItem("token");
    history.push("/log-in");
  };

  return (
    <nav className="nav">
      <div className="nav-logo-set">
        <img src={logo} alt="logo" className="nav-logo" />
        <p className="nav-title">Secret Cookbook</p>
      </div>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add-recipe">Add New Recipe</NavLink>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </nav>
  );
};

export default withRouter(Navigation);
