import React from "react";
import { Link } from "react-router";
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-2">
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">
        <span className="navbar-brand bg-danger rounded-3 p-2 text-white">
          Aphrodite Make-Up
        </span>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Products list
            </Link>

            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
