import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAlert } from "../../hooks/useAlert";
import parse from "html-react-parser";
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

  const [singleProduct, setSingleProduct] = useState<ProductPrototype | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  const { slug, name } = useParams();
  const { showAlert } = useAlert();
  const navigate = useNavigate();

  const increaseQuantity = () => {
    updateQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      updateQuantity((prev) => prev - 1);
    } else return;
  };

  const convertToObject = (productDetail: ProductPrototype[]) => {
    const product = productDetail?.map((product: ProductPrototype) => {
      return product;
    });
  //  @ts-expect-error error expected

    setSingleProduct(...product);
  };

  function handleBack() {
    navigate(-1);
  }

  const products_features = singleProduct?.features
    ? JSON.parse(singleProduct?.features)
    : [];

  const similarProducts = singleProduct?.similar_products
    ?.map((product: { [x: string]: unknown }) => {
      try {
        return JSON.parse(String(product));
      } catch (e) {
        console.error("Failed to parse product JSON", e);
        return null;
      }
    })
    .filter(Boolean); // This will remove any null values resulting from parse failures

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await getSingleProduct(name, slug);
        if (response.data) {
          convertToObject(response.data);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [name, slug]);

  return (
    <>
      {loading ? (
        <div className="alpha__loader">
          <div className="loader"></div>
        </div>
      ) : (
        <></>
      )}
      <HeroSection style={{ height: "110px" }}></HeroSection>

      <Container>
        <p onClick={handleBack} className="go-back">
          Go Back
        </p>
        <ProductDisplay>
          <div className="product__img">
            <LazyLoadImage
              effect="blur"
              src={singleProduct?.image}
              alt="product image"
            />

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
              <Button onClick={showAlert} buttonType={"primary"}>
                ADD TO CART
              </Button>
            </div>
          </div>
        </ProductDisplay>

        <Features>
          <div className="features">
            <h2>FEATURES</h2>

            {products_features?.map((feature: string, index: number) => (
              <div key={index}>{parse(feature)}</div>
            ))}
          </div>

          <div className="inBox">
            <h2>In the box</h2>
            <div>
              {singleProduct?.in_box?.map((box, index: number) => (
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

        <SimilarProducts>
          <h2>you may also like</h2>

          <div className={"products"}>
            {similarProducts?.map(
              (product: { image: string; title: string }, index: number) => (
                <div key={index}>
                  <div className="product">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <p>{product.title}</p>
                  <Button buttonType={"primary"}>See Product</Button>
                </div>
              )
            )}
          </div>
        </SimilarProducts>
      </Container>
    </>
  );
};
