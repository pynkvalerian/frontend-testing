import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import Form from '../components/Form';

test('clears input value onSubmit', async () => {
  const { getByPlaceholderText, getByRole, getByText } = render(<Form />);
  const input = getByPlaceholderText('first name');
  const submitButton = getByRole('button');

  input.value = 'Luna';

  fireEvent.click(submitButton);

  await waitForElement(() => getByText('submitted'));

  expect(input.value).toBe('');
});

test('disables button onSubmit', async () => {
  const { getByPlaceholderText, getByRole, getByText } = render(<Form />);
  const input = getByPlaceholderText('first name');
  const submitButton = getByRole('button');

  input.value = 'Luna';

  fireEvent.click(submitButton);

  await waitForElement(() => getByText('submitted'));

  expect(submitButton).toHaveAttribute('disabled');
});
