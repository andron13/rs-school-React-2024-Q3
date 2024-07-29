import { screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, it, expect, vi, Mock } from "vitest";

import { Details } from "./Details";

import { mockCharacter } from "@/src/test/mocks/mock.ts";
import renderWithProviders from "@/src/test/renderWithProviders.tsx";
import { useFetchCharacterById } from "@/src/widgets/Details/hook";

vi.mock("§/widgets/Details/hook", () => ({
  useFetchCharacterById: vi.fn(),
}));

describe.skip("Details Component", () => {
  it("renders loading state initially", () => {
    (useFetchCharacterById as Mock).mockReturnValue({
      data: null,
      error: null,
      loading: true,
    });

    renderWithProviders(
      <MemoryRouter initialEntries={["/details/1"]}>
        <Routes>
          <Route path="/details/:itemId" element={<Details />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("renders error state when there is an error", () => {
    (useFetchCharacterById as Mock).mockReturnValue({
      data: null,
      error: "Failed to fetch character",
      loading: false,
    });

    renderWithProviders(
      <MemoryRouter initialEntries={["/details/1"]}>
        <Routes>
          <Route path="/details/:itemId" element={<Details />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByTestId("error-section")).toBeInTheDocument();
    expect(screen.getByText("Failed to fetch character")).toBeInTheDocument();
  });

  it("renders character details when data is loaded", () => {
    (useFetchCharacterById as Mock).mockReturnValue({
      data: mockCharacter,
      error: null,
      loading: false,
    });

    renderWithProviders(
      <MemoryRouter initialEntries={["/details/1"]}>
        <Routes>
          <Route path="/details/:itemId" element={<Details />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
  });

  it("navigates back when close button is clicked", () => {
    (useFetchCharacterById as Mock).mockReturnValue({
      data: null,
      error: null,
      loading: false,
    });

    renderWithProviders(
      <MemoryRouter initialEntries={["/details/1"]}>
        <Routes>
          <Route path="/details/:itemId" element={<Details />} />
          <Route path="/" element={<div>Home</div>} />
        </Routes>
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByText("Close Details"));

    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
