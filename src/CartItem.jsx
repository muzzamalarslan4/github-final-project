import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        <p>Your cart is empty.</p>

        <button
          onClick={() => (window.location.href = "/")}
          className="continue-shopping"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-summary">
        <h2>Total Items: {totalItems}</h2>
        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      </div>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className="cart-item-image"
            />

            <div className="cart-item-details">
              <h3>{item.name}</h3>

              <p>Price: ${item.price}</p>

              <div className="quantity-controls">
                <button
                  onClick={() => handleDecrease(item)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => handleIncrease(item)}
                >
                  +
                </button>
              </div>

              <p>
                Subtotal: $
                {(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                onClick={() => handleRemove(item.id)}
                className="remove-button"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-actions">
        <button
          onClick={() => (window.location.href = "/")}
          className="continue-shopping"
        >
          Continue Shopping
        </button>

        <button
          onClick={() => alert("Checkout feature coming soon!")}
          className="checkout-button"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;
