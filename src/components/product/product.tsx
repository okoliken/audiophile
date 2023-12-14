import Headset from "../../assets/headset.png";
import Earpod from "../../assets/earpod.png";
import Speaker from "../../assets/small-speaker.png";
export const Product = () => {
  const products = [
    {
      title: "HEADPHONES",
      image: Headset,
      btnText: "Shop",
    },
    {
      title: "SPEAKERS",
      image: Earpod,
      btnText: "Shop",
    },
    {
      title: "EARPHONES",
      image: Speaker,
      btnText: "Shop",
    },
  ];
  return (
    <>
      {products.map((product, index) => (
        <div key={index}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
        </div>
      ))}
    </>
  );
};
