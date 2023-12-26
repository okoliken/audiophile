import styled from "styled-components";
import { device } from "../devices";
import { Button } from "../button/Button";

const CartOverlay = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5));
  width: 100%;
  min-height: 100vh;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  @media (${device.laptop}) {
    align-items: start;
    justify-content: end;
  }
`;

const CartItem = styled.div`
  width: 100%;
  max-width: 377px;
  height: 488px;
  overflow-y: scroll;
  border-radius: 8px;
  background-color: #fff;
  position: relative;
  top: 6%;
  right: 12%;
  padding: 20px;
  z-index: 9999;
  flex-shrink: 0;
  .cart__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(350px);
    width: 100%;

    button {
      flex-grow: 1;
    }
  }
  .cart__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      color: #000;
      font-family: Manrope;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 1.286px;
      text-transform: uppercase;
    }

    p {
      color: #000;
      font-family: Manrope;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 25px; /* 166.667% */
      text-decoration-line: underline;
      opacity: 0.5;
    }
  }
`;
export const Cart = () => {
  return (
    <>
      <CartOverlay>
        <CartItem>
          <div className="cart__header">
            <h3>cart (3)</h3>
            <p>Remove all</p>
          </div>

          <div className="cart__actions">
            <Button buttonType={"primary"}>
              checkout
            </Button>
          </div>
        </CartItem>
      </CartOverlay>
    </>
  );
};

// const body = document.body;

// If its there, prevent scroll from happening
// if (body) body.style.overflow = "hidden";
