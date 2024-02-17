import {
  HeroSection,
  ProductDisplay,
  Container,
  ReOrderProducts,
} from "../styles/reuseables.styled";
import { ProductShowCase } from "../components/product/product-showcase";
import { MarginBox } from "../styles/reuseables.styled";
import { Button } from "../components/button/Button";
import { useContext } from "react";
import { ProductContext } from "../context";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const HeadPhones = () => {
  const headsets = useContext(ProductContext);
  return (
    <>
      <HeroSection>
        <h2>HeadPhones</h2>
      </HeroSection>
      <Container>
        {headsets?.map((headset, index) => (
          <ProductDisplay key={index}>
            <ReOrderProducts className="product__img" index={index}>
              <LazyLoadImage
                effect="blur"
                src={headset.image}
                alt="product image"
              />
              <div className={"oval__shadow"}></div>
            </ReOrderProducts>
            <div className={"product__content"}>
              <span>{headset.sub_title}</span>
              <h2>{headset.product_name}</h2>
              <p>{headset.description}</p>
              <Button buttonType={"primary"}>
                <NavLink to={`/product/${"HEADSETS"}/${headset.slug}`}>
                  See Product
                </NavLink>
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
