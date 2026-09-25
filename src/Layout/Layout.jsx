import { Outlet } from "react-router-dom";
import Navbar from "../Components/Common/Navbar/Navbar";
import Footer from "../Components/Common/Footer/Footer";
import ScrollToTop from './../Components/Common/ScrollToTop/ScrollToTop';

export default function Layout() {
  return (
    <>
      <ScrollToTop  />
      <Navbar />
      <div className="pt-20 grow">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
