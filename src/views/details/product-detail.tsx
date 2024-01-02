import {
  ProductDisplay,
  Container,
  HeroSection,
  Features,
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

        <Features>
          <div className="features">
            <h2>FEATURES</h2>

            {product.details.feature?.map((feature: string, index: number) => (
              <p key={index}>{feature}</p>
            ))}
          </div>

          <div className="inBox">
            <h2>In the box</h2>
            <div>
              {product.details.inBox.map(
                (box: { x: string; y: string }, index: number) => (
                  <div className="box-content" key={index}>
                    <span id={'tag'}>{box.x}</span>
                    <span>{box.y}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </Features>
      </Container>
    </>
  );
};
