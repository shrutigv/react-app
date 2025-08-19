import React, { useState } from "react";
import "./AddToCart.css";

const AddToCart = ({ product, onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    if (quantity > 0) {
      onAdd(product, quantity);
      fetch('https://localhost:8080/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify({ productId: product.id, quantity })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Product added to cart:', data);
        })
        .catch(error => {
            console.error('Error adding product to cart:', error);
        });
    }
  };

  if (!product) return <div>No product selected.</div>;

  return (
    <div className="add-to-cart-container">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <label>
        Quantity:
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
        />
      </label>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
};

export default AddToCart;
