import React from 'react';
import { render } from '@testing-library/react';
import Seconds from './seconds';

test('renders initial second', () => {
  const { getByText } = render(<Seconds />);
  expect(getByText('0')).toBeInTheDocument();
});

test('renders three seconds', () => {
  jest.useFakeTimers();
  const { getByText } = render(<Seconds />);
  jest.runOnlyPendingTimers();
  jest.runOnlyPendingTimers();
  jest.runOnlyPendingTimers();
  expect(getByText('3')).toBeInTheDocument();
});
