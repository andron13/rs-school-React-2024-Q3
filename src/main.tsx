import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";

import { App } from "§/App.tsx";
import ErrorBoundary from "§/features/ErrorBoundary";
import { store } from "§/shared/store/store.ts";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
