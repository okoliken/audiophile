import {
  HeroSection,
  Container,
  Card,
  Grid,
} from "../styles/reuseables.styled";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import { Button } from "../components/button/Button";
import Shape from "../assets/Shape.svg";
import { OrderConfirmationModal } from "../components/OrderConfirmationModal";
import { useLocalStorageCart } from "../hooks/useLocalStorageCart";
import { Options, FormState } from "../utils/types";
import { List } from "../components/product/list";
import { FlexItem, GridBox } from "../styles/reuseables.styled";
import { PaymentOptionCard } from "../styles/styles.styled";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import toast from "react-hot-toast";
import { FormSchema } from "../utils/schema";

const initialState: FormState = {
  field1: "",
  field2: "",
  field3: "",
  field4: "",
  field5: "",
  field6: "",
  field7: "",
  field8: "",
  field9: "",
};



export const CheckOut = () => {
  const navigate = useNavigate();
  const { cart, getTotalPrice } = useLocalStorageCart();
  const [paymentCompletion, setPaymentCompletion] = useState(true);
  const shipping = "50";
  const vat = "1079";

  const [paymentOption, setPaymentOption] = useState<Options>({
    name: "",
    value: "",
  });
  const selectPaymentOption = (val: Options) => {
    setPaymentOption(val);
  };



  const paymentOptions = [
    {
      name: "e-Money",
      value: "online-payment",
    },
    {
      name: "Cash on Delivery",
      value: "cash",
    },
  ];

  function handleBack() {
    navigate(-1);
  }

  function formatNumberWithCommas(number: number) {
    return <>{number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</>;
  }



  useEffect(() => {
    const originalBackgroundColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#F1F1F1";

    return () => {
      document.body.style.backgroundColor = originalBackgroundColor;
    };
  }, []);

  return (
    <>
      <HeroSection style={{ height: "110px" }}></HeroSection>

      <Container>
        <div className="padded">
          <p onClick={handleBack} className="go-back">
            Go Back
          </p>

          <Formik
            initialValues={initialState}
            onSubmit={(values, actions) => {
              const config = {
                public_key: 'FLWPUBK_TEST-bec91ba01da8e6bb31ff09ed6fe0d8be-X',
                tx_ref: String(Date.now()),
                amount: 100,
                currency: 'NGN',
                payment_options: 'mobilemoney',
                customer: {
                  email: values.field2,
                  phone_number: values.field3,
                  name: values.field1,
                },
                customizations: {
                  title: 'Audiophile',
                  description: 'Payment for items in cart',
                  logo: 'https://res.cloudinary.com/dnhtq3hdg/image/upload/v1706716639/foglnzufjxtft4c0ibin.png',
                },

              };
              const handleFlutterPayment = useFlutterwave(config);

              if (paymentOption.value === "online-payment") {
                handleFlutterPayment({
                  callback: (response) => {
                    if (response.status === 'successful') {
                      setPaymentCompletion(true)
                      closePaymentModal();
                    } else {
                      toast.error('Payment unsuccessful')
                    }
                  },
                  onClose: () => {
                    closePaymentModal();
                  },
                });
              } else {
                setPaymentCompletion(true)
                // Handle other payment methods or actions
                actions.resetForm();
              }
            }}

            validationSchema={FormSchema}
          >
            {({ errors, touched }) => (
              <Form>
                <GridBox>
                  <Card className="cc-8">
                    <div>
                      <h1>CHECKOUT</h1>

                      <p>billing details</p>

                      <Grid>
                        <div
                          className={`${errors.field1 && touched.field1 ? "error" : null
                            } form-group`}
                        >
                          <label>Name</label>

                          <Field
                            placeholder="Alexei Ward"
                            name="field1"
                            type="text"
                          />
                          {errors.field1 && touched.field1 ? (
                            <span>{errors.field1}</span>
                          ) : null}
                        </div>
                        <div
                          className={`${errors.field2 && touched.field2 ? "error" : null
                            } form-group`}
                        >
                          <label>Email Address</label>
                          <Field
                            placeholder="alexei@mail.com"
                            name="field2"
                            type="email"
                          />
                          {errors.field2 && touched.field2 ? (
                            <span>{errors.field2}</span>
                          ) : null}
                        </div>
                      </Grid>
                      <div
                        className={`${errors.field3 && touched.field3 ? "error" : null
                          } form-group`}
                      >
                        <label>Phone Number</label>
                        <Field
                          placeholder="+1 202-555-0136"
                          name="field3"
                          type="text"
                        />
                        {errors.field3 && touched.field3 ? (
                          <span>{errors.field3}</span>
                        ) : null}
                      </div>

                      <p>shipping info</p>
                      <div
                        className={`${errors.field4 && touched.field4 ? "error" : null
                          } form-group`}
                      >
                        <label>Address</label>
                        <Field
                          placeholder="1137 Williams Avenue"
                          name="field4"
                          type="text"
                        />
                        {errors.field4 && touched.field4 ? (
                          <span>{errors.field4}</span>
                        ) : null}
                      </div>
                      <Grid>
                        <div
                          className={`${errors.field5 && touched.field5 ? "error" : null
                            } form-group`}
                        >
                          <label>ZIP Code</label>
                          <Field
                            placeholder="10001"
                            type="text"
                            name="field5"
                          />
                          {errors.field5 && touched.field5 ? (
                            <span>{errors.field5}</span>
                          ) : null}
                        </div>
                        <div
                          className={`${errors.field6 && touched.field6 ? "error" : null
                            } form-group`}
                        >
                          <label>City</label>
                          <Field
                            placeholder="New York"
                            name="field6"
                            type="text"
                          />
                          {errors.field6 && touched.field6 ? (
                            <span>{errors.field6}</span>
                          ) : null}
                        </div>
                      </Grid>

                      <Grid>
                        <div
                          className={`${errors.field7 && touched.field7 ? "error" : null
                            } form-group`}
                        >
                          <label>Country</label>
                          <Field
                            placeholder="United States"
                            name="field7"
                            type="text"
                          />
                          {errors.field7 && touched.field7 ? (
                            <span>{errors.field7}</span>
                          ) : null}
                        </div>
                      </Grid>

                      <p>Payment details</p>
                      <Grid>
                        <div className="form-group">
                          <label>Payment Method</label>
                        </div>

                        <div>
                          {paymentOptions.map((option, index) => (
                            <PaymentOptionCard
                              style={{
                                border: `${paymentOption.name === option.name
                                    ? "1px solid #d87d4a"
                                    : "1px solid #cfcfcf"
                                  }`,
                              }}
                              key={index}
                              onClick={() => selectPaymentOption(option)}
                            >
                              <div className="checkb-x">
                                <div
                                  className={`${paymentOption.name === option.name &&
                                    "checked"
                                    }`}
                                ></div>
                              </div>
                              <span>{option.name}</span>
                            </PaymentOptionCard>
                          ))}
                        </div>
                      </Grid>

                      {paymentOption.value === "online-payment" && (
                        <Grid>
                          <div
                            className={`${errors.field8 && touched.field8 ? "error" : null
                              } form-group`}
                          >
                            <label>e-Money Number</label>
                            <Field
                              placeholder="238521993"
                              name="field8"
                              type="text"
                            />

                            {errors.field8 && touched.field8 ? (
                              <span>{errors.field8}</span>
                            ) : null}
                          </div>
                          <div
                            className={`${errors.field9 && touched.field9 ? "error" : null
                              } form-group`}
                          >
                            <label>e-Money PIN</label>
                            <Field
                              placeholder="6891"
                              name="field9"
                              type="text"
                            />
                            {errors.field9 && touched.field9 ? (
                              <span>{errors.field9}</span>
                            ) : null}
                          </div>
                        </Grid>
                      )}
                    </div>

                    {paymentOption.value === "cash" && (
                      <div className="cod">
                        <div>
                          <img src={Shape} alt="square" />
                        </div>

                        <div>
                          <span>
                            The ‘Cash on Delivery’ option enables you to pay in
                            cash when our delivery courier arrives at your
                            residence. Just make sure your address is correct so
                            that your order will not be cancelled.
                          </span>
                        </div>
                      </div>
                    )}
                  </Card>
                  <Card className="cc-4 shipping-info">
                    <div style={{ height: "100%" }}>
                      <h2>Summary</h2>
                      {cart.length > 0 && (
                        <div className="cart__body">
                          {cart.map((cartItem, index) => (
                            <List {...cartItem} key={index}>
                              <span>{cartItem.quantity}x</span>
                            </List>
                          ))}
                        </div>
                      )}

                      <div className="product-details">
                        <FlexItem margin="8px" justify="between">
                          <h4 className="labels">TOTAL</h4>
                          <h4>$ {formatNumberWithCommas(getTotalPrice())}</h4>
                        </FlexItem>
                        <FlexItem margin="8px" justify="between">
                          <h4 className="labels">SHIPPING</h4>
                          <h4>$ {shipping}</h4>
                        </FlexItem>
                        <FlexItem margin="20px" justify="between">
                          <h4 className="labels">VAT (INCLUDED)</h4>
                          <h4>$ {vat}</h4>
                        </FlexItem>
                        <FlexItem margin="16px" justify="between">
                          <h4 className="labels">GRAND TOTAL</h4>
                          <h4 className="total">$ {formatNumberWithCommas(getTotalPrice() + parseFloat(shipping) + parseFloat(vat))}</h4>
                        </FlexItem>
                      </div>

                      <div className="checkout-action">
                        <Button type="submit" buttonType={"primary"}>
                          CONTINUE & PAY
                        </Button>
                      </div>
                    </div>
                  </Card>
                </GridBox>
              </Form>
            )}
          </Formik>
          {paymentCompletion && (
            <OrderConfirmationModal isOpen={paymentCompletion} onClose={setPaymentCompletion} />
          )}
        </div>
      </Container>
    </>
  );
};
