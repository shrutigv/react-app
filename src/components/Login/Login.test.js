import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';
import { describe, test, expect, jest } from '@jest/globals';

describe('Login Component', () => {
    test('renders login form', () => {
        render(<Login />);
        expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    });

    test('allows user to input username and password', () => {
        render(<Login />);
        const usernameInput = screen.getByLabelText(/username/i);
        const passwordInput = screen.getByLabelText(/password/i);

        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        expect(usernameInput.value).toBe('testuser');
        expect(passwordInput.value).toBe('password123');
    });

    test('calls onSubmit with username and password', () => {
        const handleSubmit = jest.fn();
        render(<Login onSubmit={handleSubmit} />);
        fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'user' } });
        fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'pass' } });
        fireEvent.click(screen.getByRole('button', { name: /login/i }));

        expect(handleSubmit).toHaveBeenCalledWith({ username: 'user', password: 'pass' });
    });

    test('shows error message on failed login', () => {
        render(<Login error="Invalid credentials" />);
        expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
    });
});