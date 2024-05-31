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
  name: "",
  email: "",
  phone: "",
  address: "",
  zipCode: "",
  city: "",
  country: "",
  eNumber: "",
  ePin: "",
};



export const CheckOut = () => {
  const navigate = useNavigate();
  const { cart, getTotalPrice } = useLocalStorageCart();
  const [paymentCompletion, setPaymentCompletion] = useState(false);
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
                  email: values.email,
                  phone_number: values.phone,
                  name: values.name,
                },
                customizations: {
                  title: 'Audiophile',
                  description: 'Payment for items in cart',
                  logo: 'https://res.cloudinary.com/dnhtq3hdg/image/upload/v1706716639/foglnzufjxtft4c0ibin.png',
                },
                redirect_url: 'http://localhost:5173/product/check-out'
              };
              const handleFlutterPayment = useFlutterwave(config);

              if (paymentOption.value === "online-payment") {
                handleFlutterPayment({
                  callback: (response) => {
                    if (response.status === 'successful') {
                      setPaymentCompletion(true)
                      closePaymentModal();
                      toast.success('Payment successful')
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
                          className={`${errors.name && touched.name ? "error" : null
                            } form-group`}
                        >
                          <label>Name</label>

                          <Field
                            placeholder="Alexei Ward"
                            name="name"
                            type="text"
                          />
                          {errors.name && touched.name ? (
                            <span>{errors.name}</span>
                          ) : null}
                        </div>
                        <div
                          className={`${errors.email && touched.email ? "error" : null
                            } form-group`}
                        >
                          <label>Email Address</label>
                          <Field
                            placeholder="alexei@mail.com"
                            name="email"
                            type="email"
                          />
                          {errors.email && touched.email ? (
                            <span>{errors.email}</span>
                          ) : null}
                        </div>
                      </Grid>
                      <div
                        className={`${errors.phone && touched.phone ? "error" : null
                          } form-group`}
                      >
                        <label>Phone Number</label>
                        <Field
                          placeholder="+1 202-555-0136"
                          name="phone"
                          type="text"
                        />
                        {errors.phone && touched.phone ? (
                          <span>{errors.phone}</span>
                        ) : null}
                      </div>

                      <p>shipping info</p>
                      <div
                        className={`${errors.address && touched.address ? "error" : null
                          } form-group`}
                      >
                        <label>Address</label>
                        <Field
                          placeholder="1137 Williams Avenue"
                          name="address"
                          type="text"
                        />
                        {errors.address && touched.address ? (
                          <span>{errors.address}</span>
                        ) : null}
                      </div>
                      <Grid>
                        <div
                          className={`${errors.zipCode && touched.zipCode ? "error" : null
                            } form-group`}
                        >
                          <label>ZIP Code</label>
                          <Field
                            placeholder="10001"
                            type="text"
                            name="zipCode"
                          />
                          {errors.zipCode && touched.zipCode ? (
                            <span>{errors.zipCode}</span>
                          ) : null}
                        </div>
                        <div
                          className={`${errors.city && touched.city ? "error" : null
                            } form-group`}
                        >
                          <label>City</label>
                          <Field
                            placeholder="New York"
                            name="city"
                            type="text"
                          />
                          {errors.city && touched.city ? (
                            <span>{errors.city}</span>
                          ) : null}
                        </div>
                      </Grid>

                      <Grid>
                        <div
                          className={`${errors.country && touched.country ? "error" : null
                            } form-group`}
                        >
                          <label>Country</label>
                          <Field
                            placeholder="United States"
                            name="country"
                            type="text"
                          />
                          {errors.country && touched.country ? (
                            <span>{errors.country}</span>
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
                            className={`${errors.eNumber && touched.eNumber ? "error" : null
                              } form-group`}
                          >
                            <label>e-Money Number</label>
                            <Field
                              placeholder="238521993"
                              name="eNumber"
                              type="text"
                            />

                            {errors.eNumber && touched.eNumber ? (
                              <span>{errors.eNumber}</span>
                            ) : null}
                          </div>
                          <div
                            className={`${errors.ePin && touched.ePin ? "error" : null
                              } form-group`}
                          >
                            <label>e-Money PIN</label>
                            <Field
                              placeholder="6891"
                              name="ePin"
                              type="text"
                            />
                            {errors.ePin && touched.ePin ? (
                              <span>{errors.ePin}</span>
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
