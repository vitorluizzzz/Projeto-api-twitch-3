import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar justify-content-center">
      <li className="nav-item nav-link">
        <Link to="/games">Jogos</Link>
      </li>
      <li className="nav-item nav-link">
        <Link to="/top-streams">Streamers</Link>
      </li>
    </nav>
  );
}

export default Header;
