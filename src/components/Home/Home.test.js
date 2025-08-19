const { render, screen } = require('@testing-library/react');
const Home = require('./Home');

test('renders Home component', () => {
    render(<Home />);
    const linkElement = screen.getByText(/home/i);
    expect(linkElement).toBeInTheDocument();
});