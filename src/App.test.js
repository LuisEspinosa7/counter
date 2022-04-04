import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App Component', () => {
  render(<App />);
  const images = screen.getAllByRole('img');
  expect(images.length).toBe(2);

  //General Validations
  expect(screen.getAllByRole('heading').length).toBe(3);
  expect(screen.getAllByRole('contentinfo').length).toBe(2);
  expect(screen.getAllByRole('button').length).toBe(2);

  //Specific ones
  expect(screen.getByRole('heading', {name: /Easy Counter/i})).toBeInTheDocument();
  expect(screen.getByRole('button', {name: /-/i})).toBeInTheDocument();
  expect(screen.getByRole('button', {name: '+'})).toBeInTheDocument();
});