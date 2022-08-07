import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Ingredients App link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ingredients App/i);
  expect(linkElement).toBeInTheDocument();
});
