import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductDetails from './ProductDetails';

test('renders product details', () => {
    const product = { name: 'Test Product', price: '$10', description: 'This is a test product.' };
    render(<ProductDetails product={product} />);
    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
    expect(screen.getByText(/\$10/i)).toBeInTheDocument();
    expect(screen.getByText(/This is a test product./i)).toBeInTheDocument();
});

test('renders with different product data', () => {
    const product = { name: 'Another Product', price: '$20', description: 'This is another test product.' };
    render(<ProductDetails product={product} />);
    expect(screen.getByText(/Another Product/i)).toBeInTheDocument();
    expect(screen.getByText(/\$20/i)).toBeInTheDocument();
    expect(screen.getByText(/This is another test product./i)).toBeInTheDocument();
});