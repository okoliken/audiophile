import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/footer.styled";

type Prop = React.PropsWithChildren;

export const Layout = ({ children }: Prop) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
