import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio hero heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /hi, i’m rani/i });
  expect(heading).toBeInTheDocument();
});
