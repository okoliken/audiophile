import {
  HeroSection,
  ProductDisplay,
  Container,
  MarginBox,
  ReOrderProducts,
} from "../styles/reuseables.styled";
import { ProductShowCase } from "../components/product/product-showcase";
import { Button } from "../components/button/Button";
import { useContext } from "react";
import { ProductContext } from "../context";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Speakers = () => {
  const speakers = useContext(ProductContext);
  return (
    <>
      <HeroSection>
        <h2>SPEAKERS</h2>
      </HeroSection>

      <Container>
        {speakers?.map((speaker, index) => (
          <ProductDisplay key={index}>
            <ReOrderProducts index={index} className="product__img">
              <LazyLoadImage
                effect="blur"
                src={speaker.image}
                alt="product image"
              />
              <div className={"oval__shadow"}></div>
            </ReOrderProducts>
            <div className={"product__content"}>
              <span>{speaker.sub_title}</span>
              <h2>{speaker.product_name}</h2>
              <p>{speaker.description}</p>

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
