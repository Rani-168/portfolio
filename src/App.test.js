import { fireEvent, render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders the portfolio hero heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /i build reliable, scalable web applications/i });
  expect(heading).toBeInTheDocument();
});

test('expands project details when a project card is clicked', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /enterprise web application/i }));

  expect(screen.getByText(/how it works/i)).toBeInTheDocument();
  expect(screen.getByText(/secure authentication and role-based access/i)).toBeInTheDocument();
});
