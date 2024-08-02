//useTheme.ts
import { useContext } from "react";

import { ThemeContext } from "./ThemeContext.tsx";

import { ThemeContextProps } from "@/components/shared/types";

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
