# E-commerce Product App

A React-based e-commerce application for browsing, searching, and purchasing products.

## Features

- Product listing and details
- Shopping cart management
- User authentication
- Order placement and history
- Responsive design

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/ecommerce-product-app.git
cd ecommerce-product-app
npm install
```

### Running the App

```bash
npm start
```

The app will be available at `http://localhost:3000`.

## Running Unit Tests

This project uses [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/) for unit testing.

```bash
npm test
```

### Example Test

```js
// src/components/ProductCard.test.js
import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

test('renders product name', () => {
    render(<ProductCard name="Test Product" price={19.99} />);
    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
});
```

## Folder Structure

```
src/
    components/
    pages/
    tests/
    App.js
    index.js
```

## License

This project is licensed under the MIT License.