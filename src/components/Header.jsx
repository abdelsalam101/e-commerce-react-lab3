import React from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";

export default function Header() {
const cartItems = useSelector((state) => state.cart) || [];
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-2">
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">
          <span className="navbar-brand bg-danger rounded-3 p-2 text-white">
            Graham Store
          </span>
        </Link>
        <div className="d-flex align-items-center gap-3">
          <Link to="/cart" className="position-relative text-dark fs-4">
            🛒
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: "0.6rem", padding: "5px 7px" }}
            >
              {totalItems}
            </span>
          </Link>
          <Link className="btn btn-outline-secondary btn-sm" to="/login">
            Login
          </Link>
          <Link className="btn btn-outline-primary btn-sm" to="/register">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}