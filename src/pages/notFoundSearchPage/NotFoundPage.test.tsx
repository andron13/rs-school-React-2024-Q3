import { render, screen } from "@testing-library/react";

import { NotFoundSection } from "./NotFoundPage.tsx";

describe("NotFoundSection Component", () => {
  it("renders not found message and image", () => {
    render(<NotFoundSection />);

    const notFoundText = screen.getByText(/Page Not Found/i);
    expect(notFoundText).toBeInTheDocument();
  });
});
