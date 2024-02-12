import { CartItem, CartOverlay } from "../../styles/styles.styled";
// import { Button } from "../button/Button";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import CartIcon from "../../assets/cart.svg";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services";

type CartProps = {
  onClose: () => void;
  isOpen: boolean;
};

export const Cart = ({ isOpen, onClose }: CartProps) => {
  const [totalCartItem] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const body = document.querySelector("body");

  const { data, isFetching, error } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
    staleTime: 3000,
    refetchOnReconnect: true,
  });

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
                {(data?.length ?? 0) === 0 && !isFetching ? (
                  <>
                    <img
                      src={CartIcon}
                      alt="empty cart icon"
                      style={{ aspectRatio: "7/2" }}
                    />
                    <p>Your cart is empty : (</p>
                  </>
                ) : (
                  <> <div className="cart-loader"></div></>
                )}
                {/* {isFetching && (data?.length)  ? <div className="cart-loader"></div> : <>data</>} */}
                {error ? <div>{error?.message}</div> : <></>}
              </div>

              {/* <div className="cart__actions">
                <Button buttonType={"primary"}>checkout</Button>
                <div className="cart-loader"></div>
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
