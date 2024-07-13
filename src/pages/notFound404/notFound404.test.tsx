import { render, screen } from "@testing-library/react";

import { NotFound404 } from "§/pages/notFound404/notFound404.tsx";

describe("notFound404 Component", () => {
  it("renders not found message and image", () => {
    render(<NotFound404 />);

    const notFoundText = screen.getByText("Oops! Page not found");
    expect(notFoundText).toBeInTheDocument();
  });
});
