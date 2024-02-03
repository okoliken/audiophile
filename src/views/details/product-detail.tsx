import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Parser } from "html-to-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  ProductDisplay,
  Container,
  HeroSection,
  Features,
} from "../../styles/reuseables.styled";

import { ProductGrid, SimilarProducts } from "../../styles/styles.styled";
import { Button } from "../../components/button/Button";
import { CartItemIncrementer } from "../../components/CartItemIncrementer";
import { ProductPrototype } from "../../utils/types";
import { getSingleProduct } from "../../services";

export const ProductDetails = () => {
  const [quantity, updateQuantity] = useState(1);
  const [singleProduct, setSingleProduct] = useState<
    (ProductPrototype | null) | null
  >(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { slug, name } = useParams();
  const htmlParser = new Parser();

  const increaseQuantity = () => {
    updateQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      updateQuantity((prev) => prev - 1);
    } else return;
  };

  const products = singleProduct?.features
    ? JSON.parse(singleProduct?.features)
    : [];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await getSingleProduct(name, slug);
        if (response.data) {
          setSingleProduct(...response.data);
          setLoading(false);
        } else {
          setError(new Error("Data is not an array"));
        }
      } catch (error) {
        setLoading(false);
        setError(error as Error);
      }
    };

    fetchProduct();
  }, [name, slug]);

  return (
    <>
      <HeroSection style={{ height: "110px" }}></HeroSection>

      <Container>

        <ProductDisplay>
          <div className="product__img">
            <LazyLoadImage effect="blur" src={singleProduct?.image} alt="product image" />

            <div className={"oval__shadow"}></div>
          </div>
          <div className={"product__content"}>
            <span>{singleProduct?.sub_title}</span>
            <h2>{singleProduct?.product_name}</h2>

            <p>{singleProduct?.description}</p>
            <h4>${singleProduct?.price}</h4>

            <div
              style={{ display: "flex", alignItems: "center", gap: "0px 15px" }}
            >
              <CartItemIncrementer
                quantity={quantity}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
              <Button buttonType={"primary"}>ADD TO CART</Button>
            </div>
          </div>
        </ProductDisplay>

        <Features>
          <div className="features">
            <h2>FEATURES</h2>

            {products?.map((feature: string, index: number) => (
              <div key={index}>{htmlParser.parse(feature)}</div>
            ))}
          </div>

          <div className="inBox">
            <h2>In the box</h2>
            <div>
              {singleProduct?.in_box.map((box, index: number) => (
                <div className="box-content" key={index}>
                  <span id={"tag"}>{box.x}</span>
                  <span>{box.y}</span>
                </div>
              ))}
            </div>
          </div>
        </Features>

        <ProductGrid>
          <div className={"first-slice"}>
            {singleProduct?.images
              .slice(0, 2)
              .map((img: string, index: number) => (
                <img key={index} src={img} />
              ))}
          </div>
          <div className={"second-slice"}>
            {singleProduct?.images
              .slice(2, 3)
              .map((img: string, index: number) => (
                <img key={index} src={img} />
              ))}
          </div>
        </ProductGrid>

        {/* <SimilarProducts>
          <h2>you may also like</h2>

          <div className={"products"}>
            {product.details.similar_products.map(
              (product: { img: string; title: string }, index: number) => (
                <div key={index}>
                  <div className="product">
                    <img src={product.img} alt={product.title} />
                  </div>
                  <p>{product.title}</p>
                  <Button buttonType={"primary"}>See Product</Button>
                </div>
              )
            )}
          </div>
        </SimilarProducts>  */}
      </Container>
    </>
  );
};




