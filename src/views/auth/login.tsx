import {
  Container,
  LoginBox,
  Title,
  Input,
  Button,
  DividerText,
  SocialButton,
  TermsText,
  Divider,
  SocialIcon,
} from "./styles.styled";

import { Form, Formik } from "formik";
import { LoginSchema } from "../../utils/schema";
import { useAuth } from "../../services/auth";

export const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const { signInWithEmail, signInWithGoogle } = useAuth();

  return (
    <Container>
      <Formik
        onSubmit={(values, actions) => {
          if (values.email && values.password) {
            actions.setSubmitting(true);
            signInWithEmail(values.email, values.password)
              .then(() => {
                actions.setSubmitting(false);
              })
              .catch(() => {
                actions.setSubmitting(false);
              });
          } else {
            return;
          }
        }}
        validationSchema={LoginSchema}
        initialValues={initialValues}
      >
        {({ isValid, setFieldValue, errors, touched, isSubmitting }) => (
          <Form>
            <LoginBox>
              <Title>Sign In</Title>
              <Input
                onChange={(e) => {
                  setFieldValue("email", e.target.value);
                }}
                name="email"
                placeholder="Enter your email address"
              />
              {errors.email && touched.email ? (
                <strong>{errors.email}</strong>
              ) : null}
              <Input
                onChange={(e) => {
                  setFieldValue("password", e.target.value);
                }}
                name="password"
                placeholder="Enter your Password"
              />
              {errors.password && touched.password ? (
                <strong>{errors.password}</strong>
              ) : null}

              <Button
                style={{ cursor: !isValid ? "not-allowed" : "pointer" }}
                disabled={!isValid}
                type="submit"
              >
                {isValid && isSubmitting ? (
                  <div className="login-btn-loader"></div>
                ) : (
                  "Continue"
                )}
              </Button>
              <Divider>
                <DividerText>or</DividerText>
              </Divider>
              <SocialButton onClick={(e) => {
                  e.preventDefault()
                  signInWithGoogle()                  
              }}>
                <SocialIcon>🔎</SocialIcon>Continue with Google
              </SocialButton>
              <TermsText>
                By signing in or creating an account, you agree with our Terms &
                Conditions and Privacy Statement
              </TermsText>
            </LoginBox>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
