import { HeroSection, ProductDisplay } from "../styles/reuseables.styled";
import { ProductShowCase } from "../components/product/product-showcase";
import { MarginBox } from "../styles/reuseables.styled";

// import { useContext } from "react";
export const HeadPhones = () => {


  return (
    <>
      <HeroSection>
        <h2>HeadPhones</h2>
      </HeroSection>

      <MarginBox>
        <ProductShowCase />
      </MarginBox>
      <ProductDisplay>
        <div></div>
        <div></div>
      </ProductDisplay>
    </>
  );
};
