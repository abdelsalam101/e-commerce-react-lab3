import { useNavigate } from "react-router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cart";

export default function ProductCard(props) {
  const { data } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart) || [];

  const handleNavigate = (productId) => {
    navigate(`/productDetail/${productId}`);
  };

  const renderStars = (rating) => {
    const stars = Math.round(rating);
    return "⭐".repeat(stars) + "☆".repeat(5 - stars);
  };

  const isInCart = cartItems.some((item) => item.id === data.id);

  return (
    <div className="card h-100 d-flex flex-column position-relative shadow-sm rounded-3">
      <div
        onClick={() => handleNavigate(data.id)}
        style={{ cursor: "pointer" }}
        className="flex-grow-1"
      >
        <div
          className={`position-absolute top-0 start-0 m-2 badge 
            ${data.stock ? "bg-success" : "bg-danger"}`}
        >
          {data.stock ? "In Stock" : "Out of Stock"}
        </div>

        <img
          src={data.images && data.images[0]}
          className="card-img-top"
          alt={data.title}
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div className="card-body p-2">
          <h5 className="card-title mb-1 fw-bold">{data.title}</h5>
          <p className="card-text mb-1 small text-muted">{data.description.slice(0, 100)}...</p>
          <p className="card-text mb-1 fw-semibold fst-italic ">{data.brand}</p>
          <p className="card-text mb-1 small fw-bold text-danger">${data.price}</p>
          <p className="card-text small">{renderStars(data.rating)}</p>
        </div>
      </div>

      <div className="card-footer bg-white border-0 mt-auto d-flex gap-2">
        <button
          className="btn btn-primary btn-sm w-50"
          onClick={() => dispatch(addToCart(data))}
        >
          Add to Cart
        </button>
        {isInCart && (
          <button
            className="btn btn-outline-danger btn-sm w-50"
            onClick={() => dispatch(removeFromCart(data.id))}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
}
