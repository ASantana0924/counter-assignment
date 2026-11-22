import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const countDisplay = screen.getByTestId('count');
  expect(countDisplay.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByRole('button', { name: /\+/i });
  const countDisplay = screen.getByTestId('count');

  fireEvent.click(incrementButton);

  expect(countDisplay.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByRole('button', { name: /-/i });
  const countDisplay = screen.getByTestId('count');

  fireEvent.click(decrementButton);

  expect(countDisplay.textContent).toBe('-1');
});
