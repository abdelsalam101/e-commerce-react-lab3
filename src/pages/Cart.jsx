import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, reset } from "../store/slices/cart";

function Cart() {
  const cartItems = useSelector((state) => state.cart) || [];
  const dispatch = useDispatch();

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between mb-3">
        <h2 className="mb-0 fw-bold">Cart</h2>

        <button
          className="btn btn-danger  shadow-sm "
          onClick={() => dispatch(reset())}
        >
          Clear Cart
        </button>
      </div>

      <hr className="mb-4" />

      {cartItems.length === 0 ? (
        <p className="text-center text-muted fs-5">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            className="row align-items-center mb-3 border-bottom py-3 shadow-sm rounded-3 bg-light"
            key={item.id}
          >
            <div className="col-2">
              <img
                src={item.images?.[0]}
                className="img-fluid"
                style={{ maxHeight: "150px", objectFit: "cover" }}
              />
            </div>
            <div className="col-4">
              <h6 className="mb-1 fw-semibold">{item.title}</h6>
              <p className="mb-1 small text-muted">{item.description?.slice(0, 50)}...</p>
              <p className="mb-0 text-muted text-secondary">Price: ${item.price}</p>
            </div>
            <div className="col-3 d-flex align-items-center">
              <button
                className="btn btn-sm btn-success me-2"
                onClick={() => dispatch(addToCart(item))}
              >
                +
              </button>
              <span>{item.quantity}</span>
              <button
                className="btn btn-sm btn-danger ms-2"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                -
              </button>
            </div>
            <div className="col-3 text-end">
              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
            </div>
          </div>
        ))
      )}

      {cartItems.length > 0 && (
        <div className="row mt-4">
          <div className="col-12 text-end">
            <h5 className="fw-bold text-success">Total: ${calculateTotal()}</h5>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
