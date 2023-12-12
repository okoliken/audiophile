import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/footer.styled";
import { Outlet } from "react-router-dom";

// type Prop = React.PropsWithChildren;

export const Layout = () => {
  return (
    <>
      <Navbar />
       <Outlet />
      <Footer />
    </>
  );
};
