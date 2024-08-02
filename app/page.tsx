import { Metadata } from "next";
import dynamic from "next/dynamic";
import { FC } from "react";

import { CharacterInfoPopup } from "@/components/characterInfoPopup";
import { ThemeProvider } from "@/components/shared/context/ThemeContext";

export const metadata: Metadata = {
  title: "My Page Title",
};

const FrontPageComponent = dynamic(() => import("@/components/frontpage.tsx"), {
  ssr: false,
});

const Page: FC = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <FrontPageComponent />
        <CharacterInfoPopup />
      </div>
    </ThemeProvider>
  );
};

export default Page;
