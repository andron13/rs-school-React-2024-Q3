import { screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

import { Header } from "./Header";

import renderWithProviders from "@/src/test/renderWithProviders";

describe("Header", () => {
  test("renders with light theme", () => {
    const onSearchClick = vi.fn();

    renderWithProviders(<Header onSearchClick={onSearchClick} />);

    expect(
      screen.getByRole("button", { name: /toggle theme/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Toggle Theme")).toBeInTheDocument();
    expect(screen.getByRole("banner")).toHaveClass("bg-blue-500"); // Проверка стиля для светлой темы
  });

  test("calls onSearchClick when search button is clicked", () => {
    const onSearchClick = vi.fn();

    renderWithProviders(<Header onSearchClick={onSearchClick} />);
    const searchButton = screen.getByRole("button", { name: /search/i });
    fireEvent.click(searchButton);

    expect(onSearchClick).toHaveBeenCalled();
  });

  test("calls toggleTheme when toggle button is clicked", () => {
    const onSearchClick = vi.fn();
    // @ts-ignore
    const { container } = renderWithProviders(
      <Header onSearchClick={onSearchClick} />,
    );

    const toggleButton = screen.getByRole("button", { name: /toggle theme/i });
    fireEvent.click(toggleButton);
  });
});
