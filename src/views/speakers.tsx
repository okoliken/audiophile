import {
  HeroSection,
  ProductDisplay,
  Container,
} from "../styles/reuseables.styled";
import { Button } from "../components/button/Button";
import { useContext } from "react";
import { productContext } from "../context";

export const Speakers = () => {
  const speakers = useContext(productContext);
  return (
    <>
      <HeroSection>
        <h2>SPEAKERS</h2>
      </HeroSection>

      <Container>
        {speakers.speakers.map((speaker, index) => (
          <ProductDisplay key={index}>
            <div
              style={index === 1 ? { order: 4 } : {}}
              className="product__img"
            >
              <img src={speaker.image} alt="product image" />

              <div className={"oval__shadow"}></div>
            </div>
            <div className={"product__content"}>
              <span>{speaker.subTitle}</span>
              <h2>{speaker.title}</h2>
              <p>{speaker.description}</p>

              <Button buttonType={"primary"}>See Product</Button>
            </div>
          </ProductDisplay>
        ))}
      </Container>
    </>
  );
};
