import { ReactNode } from "react";

import "../styles/globals.css";
import { ReduxProvider } from "@/components/shared/store/redux-provider.tsx";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
