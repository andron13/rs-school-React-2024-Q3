import { render, screen } from "@testing-library/react";

import { About } from "./About";

describe("About Page", () => {
  it("renders main content with correct text", () => {
    render(<About />);
    expect(screen.getByText("It is a test with about")).toBeInTheDocument();
  });
});
