import { CartItem, CartOverlay } from "../../styles/styles.styled";
// import { Button } from "../button/Button";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import CartIcon from "../../assets/cart.svg";
type CartProps = {
  onClose: () => void;
  isOpen: boolean;
};

export const Cart = ({ isOpen, onClose }: CartProps) => {
  const [totalCartItem] = useState(0);
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
          <motion.div
            className={"animate__motion_div"}
            style={{ width: "100%", maxWidth: "377px" }}
            initial={{ scale: 0.4 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <CartItem ref={modalRef}>
              <div className="cart__header">
                <h3>cart ({totalCartItem})</h3>
                <p>Remove all</p>
              </div>

              <div className="empty__cart">
                <img
                  src={CartIcon}
                  alt="empty car icon"
                  style={{ aspectRatio: "7/2" }}
                />

                <p>Your cart is empty : (</p>
              </div>
              
              {/* <div className="cart__actions">
                <Button buttonType={"primary"}>checkout</Button>
              </div> */}
            </CartItem>
          </motion.div>
        </CartOverlay>
      )}
    </>
  );
};

// const body = document.body;

// If its there, prevent scroll from happening
// if (body) body.style.overflow = "hidden";
