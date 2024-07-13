import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders footer content correctly", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );

    expect(screen.getByText("React Course 2024")).toBeTruthy();
    expect(screen.getByText("©andron13")).toBeTruthy();

    const aboutLink = screen.getByText("About");
    expect(aboutLink).toBeTruthy();
    expect(aboutLink).toHaveAttribute("href", "/about");
    expect(aboutLink).toHaveAttribute("title", "test");
  });
});
