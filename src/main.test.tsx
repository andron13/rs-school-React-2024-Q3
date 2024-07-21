import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { describe, it, expect } from "vitest";

import { App } from "§/App";
import ErrorBoundary from "§/features/ErrorBoundary";
import { store } from "§/shared/store/store";

vi.mock("§/App", () => ({
  App: () => <div>App Component</div>,
}));

describe("Root component", () => {
  it("renders App inside ErrorBoundary and ReduxProvider", () => {
    render(
      <React.StrictMode>
        <ErrorBoundary>
          <ReduxProvider store={store}>
            <App />
          </ReduxProvider>
        </ErrorBoundary>
      </React.StrictMode>,
    );

    expect(screen.getByText("App Component")).toBeInTheDocument();
  });
});
