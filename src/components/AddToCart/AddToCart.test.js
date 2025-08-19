/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddToCart from "./AddToCart";

describe("AddToCart", () => {
  const product = { name: "Test Product", price: 10 };
  const onAdd = jest.fn();
it("defaults quantity to 1", () => {
    render(<AddToCart product={product} onAdd={onAdd} />);
    const input = screen.getByLabelText(/Quantity/i);
    expect(input.value).toBe("1");
});

it("does not call onAdd if quantity is invalid", () => {
    render(<AddToCart product={product} onAdd={onAdd} />);
    const input = screen.getByLabelText(/Quantity/i);
    fireEvent.change(input, { target: { value: "0" } });
    fireEvent.click(screen.getByText("Add to Cart"));
    expect(onAdd).not.toHaveBeenCalled();
});

it("disables Add to Cart button if no product", () => {
    render(<AddToCart product={null} onAdd={onAdd} />);
    const button = screen.getByText("Add to Cart");
    expect(button).toBeDisabled();
});

it("prevents non-numeric input in quantity", () => {
    render(<AddToCart product={product} onAdd={onAdd} />);
    const input = screen.getByLabelText(/Quantity/i);
    fireEvent.change(input, { target: { value: "abc" } });
    expect(input.value).toBe(""); // assuming component clears invalid input
});
  it("renders product details", () => {
    render(<AddToCart product={product} onAdd={onAdd} />);
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText(/Price: \$10/)).toBeInTheDocument();
  });

  it("calls onAdd with correct arguments", () => {
    render(<AddToCart product={product} onAdd={onAdd} />);
    const input = screen.getByLabelText(/Quantity/i);
    fireEvent.change(input, { target: { value: "3" } });
    fireEvent.click(screen.getByText("Add to Cart"));
    expect(onAdd).toHaveBeenCalledWith(product, 3);
  });

  it("shows message if no product", () => {
    render(<AddToCart product={null} onAdd={onAdd} />);
    expect(screen.getByText(/No product selected/i)).toBeInTheDocument();
  });
});
