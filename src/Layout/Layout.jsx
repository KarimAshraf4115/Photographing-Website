import { Outlet } from "react-router-dom";
import Navbar from "../Components/Common/Navbar/Navbar";
import Footer from "../Components/Common/Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="pt-20 grow">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
