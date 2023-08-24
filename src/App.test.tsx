import { render, screen } from '@testing-library/react';
import App from './App';

test('Password Reset Test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Password Reset Test/i);
  expect(linkElement).toBeInTheDocument();
});
