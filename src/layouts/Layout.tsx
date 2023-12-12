import { Navbar } from "../components/navbar/Navbar";
import { PageFooter } from "../components/footer/Footer";
import { Outlet } from "react-router-dom";


export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <PageFooter />
    </>
  );
};
