import React, { FC } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorBoundary from "@/src/features/ErrorBoundary";
import { ThemeProvider } from "@/src/shared/context/ThemeContext.tsx";
import { routes } from "@/src/shared/routes";
import { store } from "@/src/shared/store/store.ts";
import { CharacterInfoPopup } from "@/src/widgets/CharacterInfoPopup";

// const router = createBrowserRouter(routes);

export const StartMeApp: FC = () => {
  return (
    <React.StrictMode>
      <ErrorBoundary>
        <ReduxProvider store={store}>
          <ThemeProvider>
            <h1>StartMeApp</h1>
            {/*<RouterProvider router={router} />*/}
            <CharacterInfoPopup />
          </ThemeProvider>
        </ReduxProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
};
