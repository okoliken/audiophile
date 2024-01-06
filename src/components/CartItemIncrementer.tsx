import { IncrementButton } from "../styles/styles.styled";

type Props = {
  decreaseQuantity: () => void;
  increaseQuantity: () => void;
  quantity: number;
};

export const CartItemIncrementer = ({
  decreaseQuantity,
  increaseQuantity,
  quantity,
}: Props) => {
  return (
    <>
      <IncrementButton>
        <p onClick={decreaseQuantity} className="decrease">
          -
        </p>
        <p className="quantity">{quantity}</p>
        <p onClick={increaseQuantity} className="increase">
          +
        </p>
      </IncrementButton>
    </>
  );
};
