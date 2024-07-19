import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";

import DetailsLayout from "./DetailsLayout";

vi.mock("§/pages/frontpage", () => ({
  Frontpage: () => <div>Mocked Frontpage</div>,
}));

describe("DetailsLayout", () => {
  it("renders Frontpage and Outlet components correctly", () => {
    render(
      <MemoryRouter initialEntries={["/details"]}>
        <Routes>
          <Route path="/details" element={<DetailsLayout />}>
            <Route path="child" element={<div>Child Component</div>} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText("Mocked Frontpage")).toBeInTheDocument();
    expect(screen.queryByText("Child Component")).toBeNull();
    window.history.pushState({}, "Test page", "/details/child");

    render(
      <MemoryRouter initialEntries={["/details/child"]}>
        <Routes>
          <Route path="/details" element={<DetailsLayout />}>
            <Route path="child" element={<div>Child Component</div>} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText("Child Component")).toBeInTheDocument();
  });
});
