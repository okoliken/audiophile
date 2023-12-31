import Headset from "../../assets/headset.png";
import Earpod from "../../assets/earpod.png";
import { Flex } from "../../styles/styles.styled";
import Speaker from "../../assets/small-speaker.png";
import { Link } from "react-router-dom";
export const Product = () => {
  const products = [
    {
      title: "HEADPHONES",
      image: Headset,
      btnText: "Shop",
      url: "/head-phones",
    },
    {
      title: "SPEAKERS",
      image: Speaker ,
      btnText: "Shop",
      url: "/speakers",
    },
    {
      title: "EARPHONES",
      image: Earpod,
      btnText: "Shop",
      url: "/earphones",
    },
  ];
  return (
    <>
      {products.map((product, index) => (
        <div className="product__xy" key={index}>
          <img src={product.image} alt={product.title} />
          <div className="overlay"></div>
          <div className="product__content">
            <h3>{product.title}</h3>
            <Flex>
              <Link to={product.url}>{product.btnText}</Link>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
              >
                <path
                  d="M1.3219 1L6.3219 6L1.3219 11"
                  stroke="#D87D4A"
                  strokeWidth="2"
                />
              </svg>
            </Flex>
          </div>
        </div>
      ))}
    </>
  );
};
