import { Outlet } from "react-router-dom";

import { Footer, Header } from "@/entities";

const MainLayout = () => {
  return (
    <section className="flex min-h-screen flex-col">
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
};

export default MainLayout;
