import { Overlay, OrderConfirmation } from "../styles/styles.styled";
import { motion } from "framer-motion";
import { Button } from './button/Button';

export const OrderConfirmationModal = () => {
  return (
    <>
      <Overlay>
        <motion.div
          className={"animate__motion_div"}
          style={{ width: "100%", maxWidth: "540px" }}
          initial={{ scale: 0.4 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <OrderConfirmation>
            <div>
              <h2>THANK YOU FOR YOUR ORDER</h2>

              <span>You will receive an email confirmation shortly.</span>
            </div>


            <div></div>

            <div className="cart__actions">
                <Button  buttonType={"primary"}>BACK TO HOME</Button>
            </div>
          </OrderConfirmation>
        </motion.div>
      </Overlay>
    </>
  );
};
