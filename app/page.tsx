import { Metadata } from "next";
import dynamic from "next/dynamic";
import { FC } from "react";

export const metadata: Metadata = {
  title: "My Page Title",
};

const FrontPageComponent = dynamic(() => import("@/components/frontpage.tsx"), {
  ssr: false,
});

const Page: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <FrontPageComponent />
    </div>
  );
};

export default Page;
