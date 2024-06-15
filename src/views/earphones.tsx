import {
  HeroSection,
  ProductDisplay,
  Container,
  MarginBox,
  ReOrderProducts,
} from "../styles/reuseables.styled";
import { ProductContext } from "../context";
import { NavLink } from "react-router-dom";
import { ProductShowCase } from "../components/product/product-showcase";
import { Button } from "../components/button/Button";
import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Earphones = () => {
  const earphones = useContext(ProductContext);

  return (
    <>
      <HeroSection>
        <h2>EARPHONES</h2>
      </HeroSection>

      <Container>
        {earphones?.map((earphone, index) => (
          <ProductDisplay key={index}>
            <ReOrderProducts className="product__img" index={index}>
              <LazyLoadImage
                effect="blur"
                src={earphone.image}
                alt="product image"
              />
              <div className={"oval__shadow"}></div>
            </ReOrderProducts>
            <div className={"product__content"}>
              <span>{earphone.sub_title}</span>
              <h2>{earphone.product_name}</h2>
              <p>{earphone.description}</p>

              <Button buttonType={"primary"}>
              <NavLink to={`/product/${"EARPHONES"}/${earphone.slug}`}>
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
