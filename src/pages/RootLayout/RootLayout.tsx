import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

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
