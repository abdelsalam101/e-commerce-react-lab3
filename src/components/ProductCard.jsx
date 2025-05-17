import { useNavigate } from "react-router";
import React from "react";

export default function ProductCard(props) {
  const { data } = props;
  const navigate = useNavigate();

  const handleNavigate = (productId) => {
    navigate(`/productDetail/${productId}`);
  };

  const renderStars = (rating) => {
    const stars = Math.round(rating);
    return "⭐".repeat(stars) + "☆".repeat(5 - stars);
  };

  return (
    <div className="card h-100 d-flex flex-column position-relative">
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
          src={data.images}
          className="card-img-top "
          alt={data.title}
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description.slice(0, 100)}...</p>
          <p className="card-text">{data.brand}</p>
          <p className="card-text">${data.price}</p>
          <p className="card-text">{renderStars(data.rating)}</p>
        </div>
      </div>

      <div className="card-footer bg-white border-0 mt-auto">
        <button className="btn btn-primary w-100">Add to Cart</button>
      </div>
    </div>
  );
}
