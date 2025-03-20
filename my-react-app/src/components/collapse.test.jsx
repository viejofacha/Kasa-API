import React from 'react'; // eslint-disable-line no-unused-vars
import { render, screen, fireEvent } from '@testing-library/react';
import Collapse from './Collapse/Collapse.jsx';
import { describe, test, expect } from 'vitest';

describe('Collapse Component', () => {
  test('toggles content visibility when clicked', () => {
    render(
      <Collapse title="Más información">
        <p>Este es el contenido colapsable</p>
      </Collapse>
    );

    expect(screen.getByText(/Más información/i)).toBeInTheDocument();
    expect(screen.queryByText(/Este es el contenido colapsable/i)).not.toBeInTheDocument();

    fireEvent.click(screen.getByText(/Más información/i));

    expect(screen.getByText(/Este es el contenido colapsable/i)).toBeInTheDocument();
  });
});

