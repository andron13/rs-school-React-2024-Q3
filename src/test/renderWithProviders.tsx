import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@/src/shared/context/ThemeContext.tsx";
import { store } from "@/src/shared/store/store.ts";

const renderWithProviders = (ui: ReactElement, options?: RenderOptions) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>{ui}</ThemeProvider>
      </BrowserRouter>
    </Provider>,
    options,
  );
};

export default renderWithProviders;
