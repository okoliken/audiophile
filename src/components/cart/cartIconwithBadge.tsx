import styled from "styled-components";
import { CartIcon } from "./cartIcon";

// Assuming your CartIcon component is already defined and imported

// Styled container that will wrap the CartIcon and the Badge
const CartContainer = styled.div`
  position: relative;
  display: inline-block;
`;

// Styled badge for showing the number of items in the cart
const Badge = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

type CartBadgeProp = {
  itemCount: number;
  openCartMenu: () => void;
};

export const CartIconWithBadge = ({
  itemCount,
  openCartMenu,
}: CartBadgeProp) => {
  return (
    <CartContainer>
      <CartIcon openCartMenu={openCartMenu} />
      {itemCount > 0 && <Badge>{itemCount}</Badge>}
    </CartContainer>
  );
};
