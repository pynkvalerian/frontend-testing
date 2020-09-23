import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders form', () => {
  const { getByPlaceholderText } = render(<App />);
  const input = getByPlaceholderText('first name')

  expect(input).toBeInTheDocument();
});
