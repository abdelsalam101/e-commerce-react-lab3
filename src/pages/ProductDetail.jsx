import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosInstance from "../apis/config";

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    axiosInstance
      .get(`/products/${params.id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [params.id]);

  const renderStars = (rating) => {
    const stars = Math.round(rating);
    return "⭐".repeat(stars) + "☆".repeat(5 - stars);
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Product Detail</h2>
      <hr />
      {product && (
        <div
          className="card mb-3 mx-auto shadow-lg"
          style={{ maxWidth: "800px" }}
        >
          <div className="row g-0">
            <div className="col-md-5">
              <img
                src={product.images}
                className="img-fluid rounded-start h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h4 className="card-title mb-3">{product.title}</h4>
                <p className="card-text">{product.description}</p>
                <p className="card-text mb-1">{renderStars(product.rating)}</p>
                <p className="card-text">
                  <strong>Price:</strong> ${product.price}
                </p>
                <p className="card-text">
                  <strong>Discount:</strong> {product.discountPercentage}%
                </p>
                <p className="card-text">
                  <strong>Brand:</strong> {product.brand}
                </p>
                <p className="card-text">
                  <strong>Category:</strong> {product.category}
                </p>
                <p className="card-text">
                  <p
                    className={`badge ${
                      product.stock ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {product.stock ? "In Stock" : "Out of Stock"}
                  </p>
                </p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
