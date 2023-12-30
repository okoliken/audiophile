import { CartItem, CartOverlay } from "../../styles/styles.styled";
import { Button } from "../button/Button";
import React, { useRef, useEffect, useState } from "react";

type CartProps = {
  onClose: () => void;
  isOpen: boolean;
};

export const Cart = ({ isOpen, onClose }: CartProps) => {
  const [totalCartItem, updateTotalCartItems] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const body = document.querySelector("body");

  const handleOutsideClick = (event: React.MouseEvent) => {
    if (body && !modalRef?.current?.contains(event.target as Node)) {
      onClose();
      body.style.overflow = "";
    }
  };

  useEffect(() => {
    if (isOpen && body) {
      body.style.overflow = "hidden";

      return () => {
        body.style.overflow = ""; // Reset to the default value
      };
    }
  }, [isOpen, body]);

  return (
    <>
      {isOpen && (
        <CartOverlay onClick={handleOutsideClick}>
          <CartItem ref={modalRef}>
            <div className="cart__header">
              <h3>cart ({totalCartItem})</h3>
              <p>Remove all</p>
            </div>
            <div className="cart__actions">
              <Button buttonType={"primary"}>checkout</Button>
            </div>
          </CartItem>
        </CartOverlay>
      )}
    </>
  );
};

// const body = document.body;

// If its there, prevent scroll from happening
// if (body) body.style.overflow = "hidden";
