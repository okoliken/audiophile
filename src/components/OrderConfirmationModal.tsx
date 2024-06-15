import { Overlay, OrderConfirmation } from "../styles/styles.styled";
import { motion } from "framer-motion";
import { Button } from './button/Button';
import { FlexItem, Grid } from "../styles/reuseables.styled";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { useLocalStorageCart } from "../hooks/useLocalStorageCart";
import Tick from '../assets/tick.svg'
import { useShortner } from "../hooks/shorten-words";
import { useNavigate } from 'react-router-dom'

type Props = {
  onClose: Dispatch<SetStateAction<boolean>>;
};

export const OrderConfirmationModal = ({ onClose }: Props) => {
  const [moreItems, setMoreItems] = useState(false)
  const { cart } = useLocalStorageCart();
  const navigate = useNavigate()



  function formatNumberWithCommas(number: number) {
    return <>{number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</>;
  }

  const { shortenProductName } = useShortner()

  

  return (
    <>
      <Overlay>
        <motion.div
          className={"animate__motion_div"}
          style={{ width: "100%", maxWidth: "500px", margin: "0 20px" }}
          initial={{ scale: 0.4 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <OrderConfirmation>
            <div className="circular-tick">
              <img src={Tick} alt="tick" />
            </div>
            <div>
              <h2>THANK YOU <br /> FOR YOUR ORDER</h2>

              <p>You will receive an email confirmation shortly.</p>
            </div>


            <Grid noGap={true} style={{ margin: "25px 0px 45px 0" }}>
              <div className="products-purchased">

                {cart.length > 0 && (
                  <>
                    {cart.slice(0, 1).map((item) => (
                      <FlexItem key={item.id} gap="0 0px" justify="between" align="start">
                        <div style={{ display: 'flex', alignItems: 'center', gap: "0 12px" }}>
                          <img src={item.product_image} />
                          <div>
                            <h4>{shortenProductName(item.product_name)}</h4>
                            <p>$ {formatNumberWithCommas(item.price)}</p>
                          </div>
                        </div>
                        <h5>x{item.quantity}</h5>
                      </FlexItem>
                    ))}
                  </>
                )}

                {moreItems && (
                  <>
                    {cart.slice(1, cart.length).map((item) => (
                      <FlexItem key={item.id} gap="0 0px" justify="between" align="start">
                        <div style={{ display: 'flex', alignItems: 'center', gap: "0 12px" }}>
                          <img src={item.product_image} />
                          <div>
                            <h4>{shortenProductName(item.product_name)}</h4>
                            <p>$ {formatNumberWithCommas(item.price)}</p>
                          </div>
                        </div>
                        <h5>x{item.quantity}</h5>
                      </FlexItem>
                    ))}
                  </>
                )}

                {cart.length > 1 && (
                  <div className="border-b">
                    <p onClick={() => setMoreItems((prev) => !prev)}>and {cart.length - 1} other item(s)</p>
                  </div>
                )}

              </div>
              <div className="total-cost">
                <h3>GRAND TOTAL</h3>
                <h4>$ 5,446</h4>
              </div>
            </Grid>

            <div className="actions">
              <Button onClick={() =>{
                onClose(false);
                navigate('/')
              }} size="100%" buttonType={"primary"}>BACK TO HOME</Button>
            </div>
          </OrderConfirmation>
        </motion.div>
      </Overlay>
    </>
  );
};
