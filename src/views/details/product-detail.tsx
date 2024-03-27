import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import { useLocalStorageCart } from "../../hooks/useLocalStorageCart";
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
  const [singleProduct, setSingleProduct] = useState<ProductPrototype | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const { slug, name } = useParams();

  const {
    increaseQuantity,
    decreaseQuantity,
    addToCart,
    getTotalQuantityForProduct,
  } = useLocalStorageCart();
  const navigate = useNavigate();

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

  function formatNumberWithCommas(number: number) {
    return <>{number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</>;
  }

  const products_features = useMemo(() => {
    return singleProduct?.features ? JSON.parse(singleProduct?.features) : [];
  }, [singleProduct]);

  const quantity =  getTotalQuantityForProduct(singleProduct?.slug || "");

  const similarProducts = useMemo(() => {
    return singleProduct?.similar_products
      ?.map((product: { [x: string]: unknown }) => {
        try {
          return JSON.parse(String(product));
        } catch (e) {
          return null;
        }
      })
      .filter(Boolean);
  }, [singleProduct]);

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
        <div className="padded">
        <p onClick={handleBack} className="go-back">
          Go Back
        </p>
        </div>
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
            <h4>${formatNumberWithCommas(Number(singleProduct?.price))}</h4>

            <div
              style={{ display: "flex", alignItems: "center", gap: "0px 15px" }}
            >
              {quantity > 0 && (
                <CartItemIncrementer
                  quantity={quantity}
                  increaseQuantity={() =>
                    increaseQuantity(singleProduct?.slug || "")
                  }
                  decreaseQuantity={() => {
                    decreaseQuantity(singleProduct?.slug || "");
                  }}
                />
              )}

              <Button
                disabled={quantity > 0}
                onClick={() => {
                  quantity <= 0 && addToCart(singleProduct);
                }}
                buttonType={"primary"}
              >
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
