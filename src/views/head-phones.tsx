import {
  HeroSection,
  ProductDisplay,
  Container,
} from "../styles/reuseables.styled";
import { ProductShowCase } from "../components/product/product-showcase";
import { MarginBox } from "../styles/reuseables.styled";
import { Button } from "../components/button/Button";
import { useContext, useEffect } from "react";
import { productContext } from "../context";
import { NavLink } from "react-router-dom";
import { ProductPrototype } from '../utils/types'

export const HeadPhones = () => {
  const headsets = useContext(productContext);

  useEffect(() => {
    if (!localStorage.getItem("details")) {
      localStorage.setItem("details", JSON.stringify({}));
    }
  }, []);

  const storeProductInLocalStorage = (product:ProductPrototype) => {
    localStorage.setItem("details", JSON.stringify(product));
  }
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

              <Button onClick={() => storeProductInLocalStorage(headset)} buttonType={"primary"}>
                <NavLink to={`/product/${headset.slug}`}>See Product</NavLink>
              </Button>
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
