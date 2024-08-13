import type { MetaFunction } from "@remix-run/node";

import { Footer } from "~/components/footer";
import FrontPage from "~/components/frontpage";
// import FrontPage from "~/components/frontpage";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix SSR" },
    { name: "description", content: "Remix SSR!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="">
        Hello world
        {/*<FrontPage />*/}
        {/*<CharacterInfoPopup />*/}
      </div>
      <Footer />
    </div>
  );
}
