import {
  ProductDisplay,
  Container,
  HeroSection,
} from "../../styles/reuseables.styled";
import { Button } from "../../components/button/Button";
import { CartItemIncrementer } from "../../components/CartItemIncrementer";
export const ProductDetails = () => {
  const product = JSON.parse(String(localStorage.getItem("details")));

  return (
    <>
      <HeroSection style={{ height: "110px" }}></HeroSection>
      <Container>
        <ProductDisplay>
          <div className="product__img">
            <img src={product.image} alt="product image" />

            <div className={"oval__shadow"}></div>
          </div>
          <div className={"product__content"}>
            <span>{product.subTitle}</span>
            <h2>{product.title}</h2>

            <p>{product.description}</p>
            <h4>${product.details.price}</h4>

            <div
              style={{ display: "flex", alignItems: "center", gap: "0px 15px" }}
            >
              <CartItemIncrementer />
              <Button buttonType={"primary"}>ADD TO CART</Button>
            </div>
          </div>
        </ProductDisplay>
      </Container>
    </>
  );
};
