import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders read-the-docs paragraph", () => {
  render(<Home />);
  const linkElement = screen.getByText(
    /Click on the Vite and React logos to learn more/i,
  );
  expect(linkElement).toBeInTheDocument();
});
