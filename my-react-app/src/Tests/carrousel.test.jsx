// src/components/Carrousel.test.jsx


import { render, screen, fireEvent } from "@testing-library/react";
import Carrousel from "../components/carrousel/Carrousel.jsx";
import { describe, test, expect } from 'vitest';
describe("Carrousel Component", () => {
  const images = ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"];

  test("affiche la première image lors du rendu", () => {
    render(<Carrousel slides={images} />);
    const img = screen.getByRole("img", { name: /slide 1/i });
    expect(img).toHaveAttribute("src", images[0]);

    const indicator = screen.getByText("1/3");
    expect(indicator).toBeInTheDocument();
  });

  test("accédez à l'image suivante en cliquant sur la flèche droite", () => {
    render(<Carrousel slides={images} />);
    const rightArrow = screen.getByAltText(/flèche de droite/i);
    fireEvent.click(rightArrow);

    const img = screen.getByRole("img", { name: /slide 2/i });
    expect(img).toHaveAttribute("src", images[1]);

    const indicator = screen.getByText("2/3");
    expect(indicator).toBeInTheDocument();
  });

  test("accédez à l'image précédente en cliquant sur la flèche gauche", () => {
    render(<Carrousel slides={images} />);
    const leftArrow = screen.getByAltText(/flèche de gauche/i);
    fireEvent.click(leftArrow);

    const img = screen.getByRole("img", { name: /slide 3/i });
    expect(img).toHaveAttribute("src", images[2]);

    const indicator = screen.getByText("3/3");
    expect(indicator).toBeInTheDocument();
  });
});
