import React from 'react';
import { render, screen } from '@testing-library/react';
import Teachers from '../pages/teachers';

test('Teachers component renders correctly', () => {
  render(<Teachers />);
  
  const formElement = screen.getByRole('form');
  expect(formElement).toBeInTheDocument();
  
});