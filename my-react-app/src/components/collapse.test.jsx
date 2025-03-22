
import { render, screen, fireEvent } from "@testing-library/react"; 
import Collapse from "../components/Collapse/Collapse.jsx";
import { describe, it, expect } from "vitest";




describe("Collapse Component", () => {
  it("toggles content visibility when clicked", () => {
    render(
      <Collapse title="Más información">
        <p>Este es el contenido colapsable</p>
      </Collapse>
    );

    const collapseElement = screen.getByText(/Más información/i);
    fireEvent.click(collapseElement); // Para simular el clic

    expect(screen.getByText(/Este es el contenido colapsable/i)).toBeInTheDocument(); // Verifica si el contenido aparece
  });
});

