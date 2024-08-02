import { Footer } from "@/components/footer";

export default function Layout({ children }) {
  return (
    <section className="flex flex-col min-h-screen">
      <div>{children}</div>
      <Footer />
    </section>
  );
}
