import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MyName from './myName';

test('displays name', () => {
  const { getByPlaceholderText, getByText } = render(<MyName />);
  const input = getByPlaceholderText('My name');

  fireEvent.input(input, { target: { value: 'Steve' } });
  expect(getByText('Hi Steve!')).toBeInTheDocument();
});
