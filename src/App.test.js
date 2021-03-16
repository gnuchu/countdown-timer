import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders a Scotland fag amongt other things', () => {
  render(<App />);
  const linkElement = screen.getByText(/🏴󠁧󠁢󠁳󠁣󠁴󠁿/i);
  expect(linkElement).toBeInTheDocument();
});
