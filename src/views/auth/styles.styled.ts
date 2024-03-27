// src/App.js
import styled from "styled-components";

// Styled components
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f0f0;
`;

export const LoginBox = styled.div`
  width: 400px;
  padding: 23px;
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;


  strong {
    color: #CD2C2C;
    transition: all .2s;
    font-size: 12px;
    margin-bottom: 4px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #555;
  }
`;

export const Divider = styled.div`
  text-align: center;
  margin: 12px 0;
  &:before,
  &:after {
    content: "";
    background-color: #ddd;
    height: 1px;
    flex: 1;
    margin: auto;
  }
`;

export const DividerText = styled.span`
  padding: 0 10px;
  background: #fff;
  color: #888;
`;

export const SocialButton = styled(Button)`
  background-color: #ddd;
  color: #333;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ccc;
  }
`;

export const SocialIcon = styled.span`
  margin-right: 8px;
`;

export const TermsText = styled.p`
  color: #888;
  font-size: 12px;
  text-align: center;
`;
