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

import { Options, FormState } from "../utils/types";
import { List } from "../components/product/list";
import { FlexItem, GridBox } from "../styles/reuseables.styled";
import { PaymentOptionCard } from "../styles/styles.styled";

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
        <div className="padded">
          <p onClick={handleBack} className="go-back">
            Go Back
          </p>

          <Formik
            initialValues={initialState}
            onSubmit={async (values) => {
              await new Promise((resolve) => setTimeout(resolve, 500));
              alert(JSON.stringify(values, null, 2));
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
                          className={`${
                            errors.field1 && touched.field1 ? "error" : null
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
                          className={`${
                            errors.field2 && touched.field2 ? "error" : null
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
                        className={`${
                          errors.field3 && touched.field3 ? "error" : null
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
                        className={`${
                          errors.field4 && touched.field4 ? "error" : null
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
                          className={`${
                            errors.field5 && touched.field5 ? "error" : null
                          } form-group`}
                        >
                          <label>ZIP Code</label>
                          <Field
                            placeholder="10001"
                            type="email"
                            name="field5"
                          />
                          {errors.field5 && touched.field5 ? (
                            <span>{errors.field5}</span>
                          ) : null}
                        </div>
                        <div
                          className={`${
                            errors.field6 && touched.field6 ? "error" : null
                          } form-group`}
                        >
                          <label>City</label>
                          <Field
                            placeholder="New York"
                            name="field6"
                            type="email"
                          />
                          {errors.field6 && touched.field6 ? (
                            <span>{errors.field6}</span>
                          ) : null}
                        </div>
                      </Grid>

                      <Grid>
                        <div
                          className={`${
                            errors.field7 && touched.field7 ? "error" : null
                          } form-group`}
                        >
                          <label>Country</label>
                          <Field
                            placeholder="United States"
                            name="field7"
                            type="email"
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
                                    paymentOption.name === option.name &&
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
                            className={`${
                              errors.field8 && touched.field8 ? "error" : null
                            } form-group`}
                          >
                            <label>e-Money Number</label>
                            <Field
                              placeholder="238521993"
                              name="email"
                              type="email"
                            />

                            {errors.field8 && touched.field8 ? (
                              <span>{errors.field8}</span>
                            ) : null}
                          </div>
                          <div
                            className={`${
                              errors.field9 && touched.field9 ? "error" : null
                            } form-group`}
                          >
                            <label>e-Money PIN</label>
                            <Field placeholder="6891" name="pin" type="text" />
                            {errors.field9 && touched.field9 ? (
                              <span>{errors.field9}</span>
                            ) : null}
                          </div>
                        </Grid>
                      )}
                    </div>
                  </Card>
                  <Card className="cc-4 shipping-info">
                    <div style={{ height: "100%" }}>
                      <h2>Summary</h2>

                      {[...Array(3)].map((_, index) => (
                        <List key={index}>
                          <span>x1</span>
                        </List>
                      ))}

                      <div className="product-details">
                        <FlexItem margin="8px" justify="between">
                          <h4 className="labels">TOTAL</h4>
                          <h4>$ 5,396</h4>
                        </FlexItem>
                        <FlexItem margin="8px" justify="between">
                          <h4 className="labels">SHIPPING</h4>
                          <h4>$ 5,396</h4>
                        </FlexItem>
                        <FlexItem margin="20px" justify="between">
                          <h4 className="labels">VAT (INCLUDED)</h4>
                          <h4>$ 5,396</h4>
                        </FlexItem>
                        <FlexItem margin="16px" justify="between">
                          <h4 className="labels">GRAND TOTAL</h4>
                          <h4 className="total">$ 5,396</h4>
                        </FlexItem>
                      </div>

                      <div className="checkout-action">
                        <Button buttonType={"primary"}>CONTINUE & PAY</Button>
                      </div>
                    </div>
                  </Card>
                </GridBox>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </>
  );
};
