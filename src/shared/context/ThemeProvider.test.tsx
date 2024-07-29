import { render, screen, fireEvent } from "@testing-library/react";

import { ThemeProvider } from "./ThemeContext.tsx";
import { useTheme } from "./useTheme.ts";

const TestComponent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span>{theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

describe("ThemeProvider", () => {
  test("renders with initial theme", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByText("light")).toBeInTheDocument();
  });

  test("toggles theme correctly", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    const button = screen.getByText("Toggle Theme");
    const themeSpan = screen.getByText("light");

    fireEvent.click(button);
    expect(themeSpan).toHaveTextContent("dark");
    fireEvent.click(button);
    expect(themeSpan).toHaveTextContent("light");
  });

  test("adds 'dark' class to document element when dark theme is active", () => {
    // @ts-ignore
    const { rerender } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    const button = screen.getByText("Toggle Theme");
    fireEvent.click(button);
    expect(document.documentElement.classList).toContain("dark");
    fireEvent.click(button);
    expect(document.documentElement.classList).not.toContain("dark");
  });
});
