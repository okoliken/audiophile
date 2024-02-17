import { Navbar } from "../components/navbar/Navbar";
import { PageFooter } from "../components/footer/Footer";
import { useLocation } from "react-router-dom";

import HeadSet from "../assets/Bitmap-headset-mobile.png";
import HeadSetDesktop from "../assets/Bitmap-headset.png";
import HeadSetTablet from "../assets/Bitmap-headset-tablet.png";
import { Container, SubSection } from "../styles/styles.styled";

export const Layout = ({ children }: React.PropsWithChildren) => {
  const location = useLocation();



  const isCheckout = location.pathname !== "/product/check-out";

  return (
    <>
      <Navbar />
      <main>{children}</main>

      {isCheckout && (
        <Container>
          <SubSection>
            <div className="subsection__content">
              <h2>
                Bringing you the <span>best</span> audio gear
              </h2>
              <p>
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
              </p>
            </div>
            <img
              className="subsection__headset_xy_image-mobile"
              src={HeadSet}
              alt="headset"
            />
            <img
              className="subsection__headset_xy_image-desktop"
              src={HeadSetDesktop}
              alt="headset"
            />
            <img
              className="subsection__headset_xy_image-tablet"
              src={HeadSetTablet}
              alt="headset"
            />
          </SubSection>
        </Container>
      )}
      <PageFooter />
    </>
  );
};
