import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import MainLayout from "./MainLayout";

vi.mock("react-router-dom", () => ({
  Outlet: () => <div>Outlet</div>,
}));

vi.mock("§/entities/Footer", () => ({
  Footer: () => <div>Footer</div>,
}));

describe("MainLayout", () => {
  it("should render Outlet and Footer", () => {
    render(<MainLayout />);

    expect(screen.getByText("Outlet")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
});
