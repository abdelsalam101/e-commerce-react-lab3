import React from "react";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import axiosInstance from "../apis/config";
export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    const skip = (page - 1) * limit;
    axiosInstance
      .get("/products/category/smartphones", {
        params: {
          limit: 10,
          skip: skip,
        },
      })
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [page]);

  return (
    <div>
      <h2>Product List</h2>
      <hr />
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <ProductCard data={product} />
          </div>
        ))}
      </div>
      
      <div className="d-flex justify-content-center mt-4 gap-3">
        <button
          className="btn btn-primary"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}>Previous</button>
        <span>Page {page}</span>
        <button className="btn btn-primary" 
        onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}
