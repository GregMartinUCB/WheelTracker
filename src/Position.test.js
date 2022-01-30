import { render, screen } from '@testing-library/react';
import Position from './Position';

test('renders learn react link', () => {
  render(<Position />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
