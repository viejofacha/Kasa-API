// src/components/Carrousel.test.jsx
import React from 'react'; // eslint-disable-line no-unused-vars

import { render, screen, fireEvent } from "@testing-library/react";
import Carrousel from "../components/carrousel/Carrousel.jsx";
import { describe, test, expect } from 'vitest';
describe("Carrousel Component", () => {
  const images = ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"];

  test("muestra la primera imagen al renderizar", () => {
    render(<Carrousel slides={images} />);
    const img = screen.getByRole("img", { name: /slide 1/i });
    expect(img).toHaveAttribute("src", images[0]);

    const indicator = screen.getByText("1/3");
    expect(indicator).toBeInTheDocument();
  });

  test("navega a la siguiente imagen al hacer clic en la flecha derecha", () => {
    render(<Carrousel slides={images} />);
    const rightArrow = screen.getByAltText(/flèche de droite/i);
    fireEvent.click(rightArrow);

    const img = screen.getByRole("img", { name: /slide 2/i });
    expect(img).toHaveAttribute("src", images[1]);

    const indicator = screen.getByText("2/3");
    expect(indicator).toBeInTheDocument();
  });

  test("navega a la imagen anterior al hacer clic en la flecha izquierda", () => {
    render(<Carrousel slides={images} />);
    const leftArrow = screen.getByAltText(/flèche de gauche/i);
    fireEvent.click(leftArrow);

    const img = screen.getByRole("img", { name: /slide 3/i });
    expect(img).toHaveAttribute("src", images[2]);

    const indicator = screen.getByText("3/3");
    expect(indicator).toBeInTheDocument();
  });
});
