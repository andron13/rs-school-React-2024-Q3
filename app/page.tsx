import { FC } from "react";

import { CharacterInfoPopup } from "~/components/characterInfoPopup";
import { ThemeProvider } from "~/components/shared/context/ThemeContext";

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
