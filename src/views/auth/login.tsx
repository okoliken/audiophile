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

export const Login = () => {
  return (
    <Container>
      <LoginBox>
        <Title>Sign In </Title>
        <Input placeholder="Enter your email address" />
        <Button>Continue</Button>
        <Divider>
          <DividerText>or</DividerText>
        </Divider>
        <SocialButton>
          <SocialIcon>🔎</SocialIcon>Continue with Google
        </SocialButton>
        <SocialButton>
          <SocialIcon>🍎</SocialIcon>Continue with Apple
        </SocialButton>
        <TermsText>
          By signing in or creating an account, you agree with our Terms &
          Conditions and Privacy Statement
        </TermsText>
      </LoginBox>
    </Container>
  );
};
