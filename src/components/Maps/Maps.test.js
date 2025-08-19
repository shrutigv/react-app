/* eslint-env jest */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Maps from './Maps';

describe('Maps component', () => {
    test('renders without crashing', () => {
        render(<Maps />);
        // You can add more specific assertions based on your component's output
    });

    test('renders map container', () => {
        render(<Maps />);
        const mapElement = screen.getByTestId('map-container');
        expect(mapElement).toBeInTheDocument();
    });

    test('renders with given props', () => {
        render(<Maps title="Test Map" />);
        const titleElement = screen.getByText(/Test Map/i);
        expect(titleElement).toBeInTheDocument();
    });
});