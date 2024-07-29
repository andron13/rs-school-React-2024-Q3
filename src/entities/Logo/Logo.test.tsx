import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";

import { Logo } from "@/src/entities/Logo/Logo.tsx";

describe("Testing the Logo component", () => {
  test("displays the logo with the correct alt attribute", () => {
    render(<Logo />);
    const logoElement = screen.getByAltText("logo");
    expect(logoElement).to.exist;
  });
});
