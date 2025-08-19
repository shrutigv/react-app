import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Checkout from "./Checkout";

describe("Checkout", () => {
  const cartItems = [
    { name: "Product 1", quantity: 2 },
    { name: "Product 2", quantity: 1 },
  ];
  const onCheckout = jest.fn();

  it("renders empty cart message", () => {
    render(<Checkout cartItems={[]} onCheckout={onCheckout} />);
    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
  });

  it("renders cart items and submits order", () => {
    render(<Checkout cartItems={cartItems} onCheckout={onCheckout} />);
    expect(screen.getByText("Product 1 x 2")).toBeInTheDocument();
    expect(screen.getByText("Product 2 x 1")).toBeInTheDocument();
    const addressInput = screen.getByLabelText(/Shipping Address/i);
    fireEvent.change(addressInput, { target: { value: "123 Main St" } });
    fireEvent.click(screen.getByText(/Place Order/i));
    expect(onCheckout).toHaveBeenCalledWith({ cartItems, address: "123 Main St" });
    expect(screen.getByText(/Order placed successfully/i)).toBeInTheDocument();
  });
});
