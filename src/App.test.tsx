import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { App } from "§/App";

vi.mock("react-router-dom", () => ({
  createBrowserRouter: vi.fn(),
  RouterProvider: ({ router }: { router: unknown }) => (
    <div>RouterProvider</div>
  ),
}));

vi.mock("§/widgets/CharacterInfoPopup", () => ({
  CharacterInfoPopup: () => <div>CharacterInfoPopup</div>,
}));

vi.mock("§/shared/context/ThemeContext.tsx", () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe("App", () => {
  it("should render RouterProvider and CharacterInfoPopup inside ThemeProvider", () => {
    render(<App />);

    expect(screen.getByText("RouterProvider")).toBeInTheDocument();
    expect(screen.getByText("CharacterInfoPopup")).toBeInTheDocument();
  });
});
