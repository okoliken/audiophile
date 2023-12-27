import {
  HeroSection,
  ProductDisplay,
  Container,
} from "../styles/reuseables.styled";
import { ProductShowCase } from "../components/product/product-showcase";
import { MarginBox } from "../styles/reuseables.styled";
import { Button } from "../components/button/Button";
import { useContext } from "react";
import { productContext } from "../context";
export const HeadPhones = () => {
  const headsets = useContext(productContext);

  return (
    <>
      <HeroSection>
        <h2>HeadPhones</h2>
      </HeroSection>
      <Container>
        {headsets.headsets.map((headset, index) => (
          <ProductDisplay key={index}>
            <div
              style={index === 1 ? { order: 4 } : {}}
              className="product__img"
            >
              <img src={headset.image} alt="product image" />

              <div className={"oval__shadow"}></div>
            </div>
            <div className={"product__content"}>
              <span>{headset.subTitle}</span>
              <h2>{headset.title}</h2>
              <p>{headset.description}</p>

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
