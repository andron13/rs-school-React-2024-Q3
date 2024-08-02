// "use client";
//
// import React, {
//   createContext,
//   useState,
//   useEffect,
//   useContext,
//   ReactNode,
// } from "react";
//
// import { Theme, ThemeContextProps } from "@/components/shared/types";
//
// const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
//
// export const ThemeProvider = ({ children }: { children: ReactNode }) => {
//   const [theme, setTheme] = useState<Theme>("light");
//
//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };
//
//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [theme]);
//
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
//
// export const useTheme = (): ThemeContextProps => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return context;
// };
