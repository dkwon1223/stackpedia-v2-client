import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <Navbar />
      <section className="flex-1 overflow-y-auto">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default RootLayout;
