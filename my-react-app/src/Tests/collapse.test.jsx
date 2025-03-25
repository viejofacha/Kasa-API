
import { render, screen, fireEvent } from "@testing-library/react"; 
import Collapse from "../components/Collapse/Collapse.jsx";
import { describe, it, expect } from "vitest";




describe("Collapse Component", () => {
  it("toggles content visibility when clicked", () => {
    render(
      <Collapse title="Plus d'informations">
        <p>Ceci est le contenu pliable</p>
      </Collapse>
    );

    const collapseElement = screen.getByText(/Plus d'informations/i);
    fireEvent.click(collapseElement); // Pour simuler le clic

    expect(screen.getByText(/Ceci est le contenu pliable/i)).toBeInTheDocument(); // Vérifiez si le contenu apparaît
  });
});

