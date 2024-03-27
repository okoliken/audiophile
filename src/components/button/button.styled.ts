import styled, { css } from "styled-components";

const defaultSize = "160px";
const largeSize = "220px";

export const BaseButton = styled.button<{
  $buttonType: string;
  $variant: string;
  $size: string;
  disabled: boolean;
  type?: string;
}>`
  font-size: 0.8125em;
  color: #fff;
  padding: 0.25em 1em;
  width: ${(props) => (props.$size === "default" ? defaultSize : largeSize)};
  height: 48px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 700;
  border: 3px solid
    ${(props) => (props.$buttonType === "primary" ? "#d87d4a" : "#000")};
  appearance: none;
  outline: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.$buttonType === "primary" ? "#d87d4a" : "#000"};
  transition: all 300ms ease-in-out;

  &:hover {
    background-position: 100%;
    color: ${(props) => (props.$buttonType === "primary" ? "#fff" : "#fff")};
    border: 3px solid
      ${(props) => (props.$buttonType === "primary" ? "#FBAF85" : "#000")};
    background-color: ${(props) =>
      props.$buttonType === "primary" ? "#FBAF85" : ""};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${(props) =>
    props.$variant === "outline" &&
    css`
      background: transparent;
      color: #000;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: black;
        color: #fff;
      }
    `};
`;
