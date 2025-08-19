import React, { useState } from "react";
import "./Checkout.css";

const Checkout = ({ cartItems = [], onCheckout }) => {
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length && address) {
      onCheckout({ cartItems, address });
      setSubmitted(true);
    }
    fetch('https://localhost:8080/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
        body: JSON.stringify({ cartItems, address })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Checkout successful:', data);
        setSubmitted(true);
      })
      .catch(error => {
        console.error('Error during checkout:', error);
        alert('Checkout failed. Please try again later.');
        });
  };

  if (submitted) {
    return <div className="checkout-success">Order placed successfully!</div>;
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <div>Your cart is empty.</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <ul>
            {cartItems.map((item, idx) => (
              <li key={idx}>{item.name} x {item.quantity}</li>
            ))}
          </ul>
          <label>
            Shipping Address:
            <input
              type="text"
              value={address}
              onChange={e => setAddress(e.target.value)}
              required
            />
          </label>
          <button type="submit">Place Order</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
