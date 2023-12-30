import {
  HeroSection,
  ProductDisplay,
  Container,
  MarginBox,
} from "../styles/reuseables.styled";

import { ProductShowCase } from "../components/product/product-showcase";
import { Button } from "../components/button/Button";
import { useContext } from "react";
import { productContext } from "../context";

export const Earphones = () => {
  const earphones = useContext(productContext);

  return (
    <>
      <HeroSection>
        <h2>EARPHONES</h2>
      </HeroSection>

      <Container>
        {earphones.earphones.map((earphone, index) => (
          <ProductDisplay key={index}>
            <div
              style={index === 1 ? { order: 4 } : {}}
              className="product__img"
            >
              <img src={earphone.image} alt="product image" />

              <div className={"oval__shadow"}></div>
            </div>
            <div className={"product__content"}>
              <span>{earphone.subTitle}</span>
              <h2>{earphone.title}</h2>
              <p>{earphone.description}</p>

              <Button buttonType={"primary"}>See Product</Button>
            </div>
          </ProductDisplay>
        ))}
      </Container>

      <MarginBox>
        <ProductShowCase />
      </MarginBox>
    </>
  );
};
