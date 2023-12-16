import { ProductContainer } from "./product.styled";
import { Container } from "../styles/styles.styled";
import { Product } from "./product";
export const ProductShowCase = () => {
  return (
    <>
      <Container>
        <ProductContainer>
          <Product />
        </ProductContainer>
      </Container>
    </>
  );
};
