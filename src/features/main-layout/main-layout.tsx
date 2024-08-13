import { Footer } from "@/entities/footer";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <section className="flex min-h-screen flex-col">
      <Outlet />
      <Footer />
    </section>
  );
};

export default MainLayout;
