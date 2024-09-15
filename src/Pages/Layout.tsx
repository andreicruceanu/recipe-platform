import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import useScrollToTop from "@/hook/useScrollTop";
import { Outlet } from "react-router-dom";

const Layout = () => {
  useScrollToTop();
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
