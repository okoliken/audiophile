import styled from "styled-components";

export const BaseButton = styled.button<{ $buttonType: string }>`
  font-size: 0.8125em;
  color: #fff;
  padding: 0.25em 1em;
  width: 160px;
  height: 48px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 700;
  border: 3px solid
    ${(props) => (props.$buttonType === "primary" ? "#d87d4a" : "#000")};
  appearance: none;
  outline: none;
  cursor: pointer;

  background-image: -webkit-linear-gradient(
    30deg,
    ${(props) => (props.$buttonType === "primary" ? "#d87d4a" : "#000")} 50%,
    #fff 50%
  );
  background-image: linear-gradient(
    30deg,
    ${(props) => (props.$buttonType === "primary" ? "#d87d4a" : "#000")} 50%,
    #fff 50%
  );
  background-size: 500px;
  background-repeat: no-repeat;
  background-position: 0%;
  -webkit-transition: background 300ms ease-in-out;
  transition: background 300ms ease-in-out;

  &:hover {
    background-position: 100%;
    color: ${(props) => (props.$buttonType === "primary" ? "#d87d4a" : "#000")};
    border: 3px solid
      ${(props) => (props.$buttonType === "primary" ? "#d87d4a" : "#000")};
  }
`;
// ${props => props.$primary ? "#BF4F74" : "white"};
