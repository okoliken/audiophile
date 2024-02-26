import {
  HeroSection,
  Container,
  Card,
  GridBox,
  Grid,
} from "../styles/reuseables.styled";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useReducer } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button } from "../components/button/Button";

import { Options } from "../utils/types";
import { List } from "../components/product/list";
import { FlexItem } from "../styles/reuseables.styled";
import { PaymentOptionCard } from "../styles/styles.styled";

type ReducerAction = {
  type: string;
  fieldName: string;
  value: string;
};

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
interface FormState {
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  field6: string;
  field7: string;
  field8: string;
  field9: string;
}


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

  function formReducer(state: FormState, action: { type: string; fieldName: keyof FormState; value: string }): FormState {
    switch (action.type) {
      case "updateField":
        return { ...state, [action.fieldName]: action.value };
      default:
        throw new Error();
    }
  }

 

  const [state, dispatch] = useReducer(formReducer, initialState);

  const updateField = (fieldName: keyof FormState, value: string) => {
    dispatch({ type: "updateField", fieldName, value });
  };

  const validate = (values: FormState) => {

    const errors:FormState  = {
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

    if (!values.field2) {

      errors.field2 = 'Required';

    } else if (

      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.field1)

    ) {

      errors.field2 = 'Invalid email address';

    }

    return errors;

  }

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
                initialValues={initialState}
                onSubmit={async (values) => {
                  await new Promise((resolve) => setTimeout(resolve, 500));
                  alert(JSON.stringify(values, null, 2));
                }}
                validate={values => validate(values)}
              >
                <Form>
                  <Grid>
                    <div className="form-group">
                      <label>Name</label>
                      <Field
                        placeholder="Alexei Ward"
                        name="field1"
                        value={state.field1}
                        onChange={(e: ChangeEvent) =>
                          updateField("field1", e.target.value)
                        }
                        type="text"
                      />
                       <ErrorMessage name="field1" component="p" />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <Field
                        placeholder="alexei@mail.com"
                        name="field2"
                        value={state.field2}
                        onChange={(e: ChangeEvent) =>
                          updateField("field2", e.target.value)
                        }
                        type="email"
                      />
                         <ErrorMessage name="field2" component="span" />
                    </div>
                  </Grid>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <Field
                      placeholder="+1 202-555-0136"
                      name="field3"
                      value={state.field3}
                      onChange={(e: ChangeEvent) =>
                        updateField("field3", e.target.value)
                      }
                      type="text"
                    />
                     <ErrorMessage name="field3" component="p" />
                  </div>

                  <p>shipping info</p>
                  <div className="form-group">
                    <label>Address</label>
                    <Field
                      placeholder="1137 Williams Avenue"
                      name="field4"
                      value={state.field4}
                      onChange={(e: ChangeEvent) =>
                        updateField("field4", e.target.value)
                      }
                      type="text"
                    />
                     <ErrorMessage name="field4" component="p" />
                  </div>
                  <Grid>
                    <div className="form-group">
                      <label>ZIP Code</label>
                      <Field
                        placeholder="10001"
                        value={state.field5}
                        onChange={(e: ChangeEvent) =>
                          updateField("field5", e.target.value)
                        }
                        name="email"
                        type="email"
                      />
                    </div>
                    <div className="form-group">
                      <label>City</label>
                      <Field
                        placeholder="New York"
                        value={state.field6}
                        onChange={(e: ChangeEvent) =>
                          updateField("field6", e.target.value)
                        }
                        name="email"
                        type="email"
                      />
                    </div>
                  </Grid>

                  <Grid>
                    <div className="form-group">
                      <label>Country</label>
                      <Field
                        placeholder="United States"
                        name="country"
                        value={state.field7}
                        onChange={(e: ChangeEvent) =>
                          updateField("field7", e.target.value)
                        }
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
                          value={state.field8}
                          onChange={(e: ChangeEvent) =>
                            updateField("field8", e.target.value)
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label>e-Money PIN</label>
                        <Field
                          placeholder="6891"
                          name="pin"
                          type="password"
                          value={state.field9}
                          onChange={(e: ChangeEvent) =>
                            updateField("field9", e.target.value)
                          }
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

              {[...Array(3)].map((_, index) => (
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
