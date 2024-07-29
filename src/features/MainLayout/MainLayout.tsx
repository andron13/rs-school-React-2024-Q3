import { Outlet } from "react-router-dom";

import { Footer } from "@/src/entities/Footer";

const MainLayout = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <Outlet />
      <Footer />
    </section>
  );
};

export default MainLayout;
