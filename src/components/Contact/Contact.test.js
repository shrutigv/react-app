import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './Contact';

describe('Contact Component', () => {
    test('renders contact form', () => {
        render(<Contact />);
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    });

    test('shows validation errors when submitting empty form', () => {
        render(<Contact />);
        fireEvent.click(screen.getByRole('button', { name: /submit/i }));
        expect(screen.getByText(/name is required/i)).toBeInTheDocument();
        expect(screen.getByText(/email is required/i)).toBeInTheDocument();
        expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });

    test('shows email validation error for invalid email', () => {
        render(<Contact />);
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'invalid-email' } });
        fireEvent.click(screen.getByRole('button', { name: /submit/i }));
        expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
    });

    test('submits form with valid data', () => {
        render(<Contact />);
        fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello there!' } });
        fireEvent.click(screen.getByRole('button', { name: /submit/i }));
        expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/email is required/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/message is required/i)).not.toBeInTheDocument();
        // Optionally, check for a success message
        // expect(screen.getByText(/thank you/i)).toBeInTheDocument();
    });
});