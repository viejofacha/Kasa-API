import React from 'react'; // eslint-disable-line no-unused-vars
import { render, screen } from '@testing-library/react';
import Footer from './footer/Footer.jsx';
import { describe, test, expect } from 'vitest';

describe('Footer Component', () => {
  test('renders Footer correctly', () => {
    render(<Footer />);

    expect(screen.getByText(/© 2020 Kasa. All rights reserved/i)).toBeInTheDocument();
  });
});
