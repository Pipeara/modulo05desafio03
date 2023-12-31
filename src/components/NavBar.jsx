import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; // Ajusta la ruta según la ubicación de tu archivo de imagen

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarPokemon"
          aria-controls="navbarPokemon"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarPokemon">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/pokemones"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Pokemones
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="Logo" width="50" height="50" />
        </NavLink>
      </div>
    </nav>
  );
}
