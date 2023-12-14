import {
  Container,
  HeroBanner,
} from "../components/reuseable-styles/reuse.styled";
import { ProductShowCase } from "../components/product/product-showcase";
import { Button } from "../components/button/Button";

export const Home = () => {
  return (
    <>
      <HeroBanner>
        <Container>
          <div className="hero__Text">
            <span>NEW PRODUCT</span>
            <h1>
              XX99 Mark II <br /> Headphones
            </h1>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>

            <Button>See Product</Button>
          </div>
        </Container>
      </HeroBanner>
      <ProductShowCase />
    </>
  );
};
