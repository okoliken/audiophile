import {
  HeroSection,
  Container,
  Card,
  GridBox,
  Grid,
} from "../styles/reuseables.styled";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import { Button } from "../components/button/Button";

import { Options } from "../utils/types";
import { List } from "../components/product/list";
import { FlexItem } from "../styles/reuseables.styled";
import { PaymentOptionCard } from "../styles/styles.styled";

export const CheckOut = () => {
  const navigate = useNavigate();
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
        <p onClick={handleBack} className="go-back">
          Go Back
        </p>
        <GridBox>
          <Card className="cc-8">
            <div>
              <h1>CHECKOUT</h1>

              <p>billing details</p>
              <Formik
                initialValues={{ name: "", email: "" }}
                onSubmit={async (values) => {
                  await new Promise((resolve) => setTimeout(resolve, 500));
                  alert(JSON.stringify(values, null, 2));
                }}
              >
                <Form>
                  <Grid>
                    <div className="form-group">
                      <label>Name</label>
                      <Field
                        placeholder="Alexei Ward"
                        name="name"
                        type="text"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <Field
                        placeholder="alexei@mail.com"
                        name="email"
                        type="email"
                      />
                    </div>
                  </Grid>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <Field
                      placeholder="+1 202-555-0136"
                      name="email"
                      type="text"
                    />
                  </div>

                  <p>shipping info</p>
                  <div className="form-group">
                    <label>Address</label>
                    <Field
                      placeholder="1137 Williams Avenue"
                      name="address"
                      type="text"
                    />
                  </div>
                  <Grid>
                    <div className="form-group">
                      <label>ZIP Code</label>
                      <Field placeholder="10001" name="email" type="email" />
                    </div>
                    <div className="form-group">
                      <label>City</label>
                      <Field placeholder="New York" name="email" type="email" />
                    </div>
                  </Grid>

                  <Grid>
                    <div className="form-group">
                      <label>Country</label>
                      <Field
                        placeholder="United States"
                        name="country"
                        type="email"
                      />
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
                            border: `${
                              paymentOption.name === option.name
                                ? "1px solid #d87d4a"
                                : "1px solid #cfcfcf"
                            }`,
                          }}
                          key={index}
                          onClick={() => selectPaymentOption(option)}
                        >
                          <div className="checkb-x">
                            <div
                              className={`${
                                paymentOption.name === option.name && "checked"
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
                      <div className="form-group">
                        <label>e-Money Number</label>
                        <Field
                          placeholder="238521993"
                          name="email"
                          type="email"
                        />
                      </div>
                      <div className="form-group">
                        <label>e-Money PIN</label>
                        <Field
                          placeholder="6891"
                          name="email"
                          type="password"
                        />
                      </div>
                    </Grid>
                  )}
                </Form>
              </Formik>
            </div>
          </Card>
          <Card className="cc-4 shipping-info">
            <div style={{ height: "100%" }}>
              <h2>Summary</h2>

              {[...Array(5)].map((_, index) => (
                <List key={index}>
                  <span>x1</span>
                </List>
              ))}

              <div className="product-details">
                <FlexItem margin="16px" justify="between">
                  <h4>TOTAL</h4>
                  <h4>$ 5,396</h4>
                </FlexItem>
                <FlexItem margin="16px" justify="between">
                  <h4>SHIPPING</h4>
                  <h4>$ 5,396</h4>
                </FlexItem>
                <FlexItem margin="16px" justify="between">
                  <h4>VAT (INCLUDED)</h4>
                  <h4>$ 5,396</h4>
                </FlexItem>
                <FlexItem margin="16px" justify="between">
                  <h4>GRAND TOTAL</h4>
                  <h4>$ 5,396</h4>
                </FlexItem>
              </div>

              <div className="checkout-action">
                <Button buttonType={"primary"}>CONTINUE & PAY</Button>
              </div>
            </div>
          </Card>
        </GridBox>
      </Container>
    </>
  );
};
