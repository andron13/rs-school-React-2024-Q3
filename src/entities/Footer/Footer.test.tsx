import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";

import { Footer } from "@/src/entities/Footer/Footer.tsx";
import { useTheme } from "@/src/shared/context/useTheme.ts";

vi.mock("§/shared/context/useTheme.ts", () => ({
  useTheme: vi.fn(),
}));

const renderFooterWithTheme = (theme: string) => {
  (
    useTheme as unknown as {
      mockReturnValue: (value: { theme: string }) => void;
    }
  ).mockReturnValue({ theme });

  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>,
  );
};

describe("Footer", () => {
  it("renders correctly with light theme", () => {
    renderFooterWithTheme("light");

    expect(screen.getByText("React Course 2024")).toBeInTheDocument();
    expect(screen.getByText("©andron13")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();

    const footerElement = screen
      .getByText("React Course 2024")
      .closest("footer");
    expect(footerElement).toHaveClass("bg-gray-700");
    expect(footerElement).toHaveClass("text-white");
  });

  it("renders correctly with dark theme", () => {
    renderFooterWithTheme("dark");

    expect(screen.getByText("React Course 2024")).toBeInTheDocument();
    expect(screen.getByText("©andron13")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();

    const footerElement = screen
      .getByText("React Course 2024")
      .closest("footer");
    expect(footerElement).toHaveClass("bg-gray-900");
    expect(footerElement).toHaveClass("text-gray-500");
  });

  it("contains a link with correct href and title", () => {
    renderFooterWithTheme("light");

    const linkElement = screen.getByText("About");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest("a")).toHaveAttribute("href", "/about");
    expect(linkElement.closest("a")).toHaveAttribute("title", "test");
  });
});
