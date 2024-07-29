import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, vi, Mock } from "vitest";

import { useFetchCharacters } from "./hook";
import { MainSection } from "./MainSection";

import { useTheme } from "@/src/shared/context/useTheme.ts";

vi.mock("./hook", () => ({
  useFetchCharacters: vi.fn(),
}));

vi.mock("§/shared/context/useTheme.ts", () => ({
  useTheme: vi.fn(),
}));

vi.mock("./ui", () => ({
  DataSection: vi.fn(() => <div>DataSection Component</div>),
}));

vi.mock("§/entities/ErrorSection", () => ({
  ErrorSection: vi.fn(() => <div>ErrorSection Component</div>),
}));

vi.mock("§/entities/LoadingSpinner", () => ({
  LoadingSpinner: vi.fn(() => <div>LoadingSpinner Component</div>),
}));

describe("MainSection Component", () => {
  it("renders loading spinner when loading", () => {
    (useFetchCharacters as Mock).mockReturnValue({
      data: null,
      error: null,
      loading: true,
    });
    (useTheme as Mock).mockReturnValue({ theme: "light" });

    render(
      <BrowserRouter>
        <MainSection searchString="Rick" />
      </BrowserRouter>,
    );

    expect(screen.getByText("LoadingSpinner Component")).toBeInTheDocument();
  });

  it("renders error section when there is an error", () => {
    (useFetchCharacters as Mock).mockReturnValue({
      data: null,
      error: "Error message",
      loading: false,
    });
    (useTheme as Mock).mockReturnValue({ theme: "light" });

    render(
      <BrowserRouter>
        <MainSection searchString="Rick" />
      </BrowserRouter>,
    );

    expect(screen.getByText("ErrorSection Component")).toBeInTheDocument();
  });

  it("renders data section when data is available", () => {
    const mockData = [{ id: 1, name: "Rick Sanchez" }];
    (useFetchCharacters as Mock).mockReturnValue({
      data: mockData,
      error: null,
      loading: false,
    });
    (useTheme as Mock).mockReturnValue({ theme: "light" });

    render(
      <BrowserRouter>
        <MainSection searchString="Rick" />
      </BrowserRouter>,
    );

    expect(screen.getByText("DataSection Component")).toBeInTheDocument();
  });

  it("applies light theme class", () => {
    (useFetchCharacters as Mock).mockReturnValue({
      data: null,
      error: null,
      loading: false,
    });
    (useTheme as Mock).mockReturnValue({ theme: "light" });

    const { container } = render(
      <BrowserRouter>
        <MainSection searchString="Rick" />
      </BrowserRouter>,
    );

    expect(container.firstChild).toHaveClass("bg-white text-gray-900");
  });

  it("applies dark theme class", () => {
    (useFetchCharacters as Mock).mockReturnValue({
      data: null,
      error: null,
      loading: false,
    });
    (useTheme as Mock).mockReturnValue({ theme: "dark" });

    const { container } = render(
      <BrowserRouter>
        <MainSection searchString="Rick" />
      </BrowserRouter>,
    );

    expect(container.firstChild).toHaveClass("bg-gray-800 text-white");
  });
});
