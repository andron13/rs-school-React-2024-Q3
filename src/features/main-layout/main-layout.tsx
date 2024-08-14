import { Outlet } from "react-router-dom";

import { Footer } from "@/entities/footer";
import { Header } from "@/entities/header";

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
