import {
  HeroSection,
  Container,
  Card,
  GridBox,
} from "../styles/reuseables.styled";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Formik, Field, Form } from "formik";

export const CheckOut = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    // Store the original background color
    const originalBackgroundColor = document.body.style.backgroundColor;

    // Change the background color
    document.body.style.backgroundColor = "#F1F1F1";

    // Cleanup function to revert the background color when the component unmounts
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
                  <Field name="name" type="text" />
                  <Field name="email" type="email" />
                
                </Form>
              </Formik>
            </div>
          </Card>
          <Card className="cc-4"></Card>
        </GridBox>
      </Container>
    </>
  );
};
