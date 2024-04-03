import { CartItem, CartOverlay } from "../../styles/styles.styled";
import { Button } from "../button/Button";
import { useRef, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import CartIcon from "../../assets/cart.svg";
import { useLocalStorageCart } from "../../hooks/useLocalStorageCart";
import { CartItemIncrementer } from "../CartItemIncrementer";
import { List } from "../product/list";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

type CartProps = {
  onClose: () => void;
  isOpen: boolean;
};

export const Cart = ({ isOpen, onClose }: CartProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const body = document.querySelector("body");
  const navigate = useNavigate();

  const { cart, increaseQuantity, decreaseQuantity } = useLocalStorageCart();

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
        body.style.overflow = "";
      };
    }
  }, [isOpen, body]);

  const getTotalItems = useMemo(() => {
    return cart.reduce((total, currentItem) => total + currentItem.quantity, 0);
  }, [cart]);

  const getTotalPrice = useCallback((): number => {
    return cart.reduce(
      (total, productPrices) =>
        total + Number(productPrices.price) * productPrices.quantity,
      0
    );
  }, [cart]);

  function formatNumberWithCommas(number: number) {
    return <>{number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</>;
  }

  return (
    <>
      {isOpen && (
        <CartOverlay onClick={handleOutsideClick}>
          <motion.div
            className={"animate__motion_div"}
            style={{ width: "100%", maxWidth: "377px", margin:"0 20px" }}
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
                <h3>cart ({getTotalItems})</h3>
                <p
                onClick={() => {
                  if (cart && cart.length) {
                    localStorage.removeItem('cart')
                    
                    toast.success("Cart updated");
                    window.dispatchEvent(new Event("localstoragecartupdated"));
                  } else return
                }}
                  style={{
                    cursor: `${getTotalItems <= 0 ? "not-allowed" : "pointer"}`,
                  }}
                >
                  Remove all
                </p>
              </div>

              {cart.length <= 0 && (
                <div className="empty__cart">
                  <img
                    src={CartIcon}
                    alt="empty cart icon"
                    style={{ aspectRatio: "7/2" }}
                  />
                  <p>Your cart is empty : (</p>
                </div>
              )}

              {cart.length > 0 && (
                <div className="cart__body">
                  {cart.map((cartItem, index) => (
                    <List {...cartItem} key={index}>
                      <CartItemIncrementer
                        quantity={cartItem.quantity}
                        increaseQuantity={() =>
                          increaseQuantity(cartItem.id || "")
                        }
                        decreaseQuantity={() => {
                          decreaseQuantity(cartItem.id || "");
                        }}
                      />
                    </List>
                  ))}
                </div>
              )}

              {cart.length > 0 && (
                <div className="cart__actions">
                  <div className="total__price">
                    <p className="label">TOTAL</p>
                    <p className="price">
                      $ {formatNumberWithCommas(getTotalPrice())}
                    </p>
                  </div>
                  <Button
                    onClick={() => navigate("/product/check-out")}
                    buttonType={"primary"}
                  >
                    checkout
                  </Button>
                </div>
              )}
            </CartItem>
          </motion.div>
        </CartOverlay>
      )}
    </>
  );
};
