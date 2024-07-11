import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";

import { Logo } from "§/entities/Logo";

describe("Testing the Logo component", () => {
  test("displays the logo with the correct alt attribute", () => {
    render(<Logo />);
    const logoElement = screen.getByAltText("logo");
    expect(logoElement).to.exist;
  });
});
