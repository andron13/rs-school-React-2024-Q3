import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";

import ErrorBoundary from "../components/errorBoundary";

import { CharacterInfoPopup } from "@/components/characterInfoPopup";
import Layout from "@/components/layout.tsx";
import { ThemeProvider } from "@/components/shared/context/ThemeContext.tsx";
import { store } from "@/components/shared/store/store.ts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ReduxProvider store={store}>
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
            <CharacterInfoPopup />
          </Layout>
        </ThemeProvider>
      </ReduxProvider>
    </ErrorBoundary>
  );
}
