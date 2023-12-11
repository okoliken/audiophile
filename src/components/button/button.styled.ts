import styled from "styled-components";



export const BaseButton = styled.button`
  font-size: 0.8125em;
  color: #fff;
  padding: 0.25em 1em;
  width: 160px;
  height: 48px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 700;
  border: 3px solid #d87d4a;
  appearance: none;
  outline: none;
  cursor: pointer;
 
  background-image: -webkit-linear-gradient(
    30deg,
    #d87d4a 50%,
    #fff 50%
  );
  background-image: linear-gradient(30deg, #d87d4a 50%, #fff 50%);
  background-size: 500px;
  background-repeat: no-repeat;
  background-position: 0%;
  -webkit-transition: background 300ms ease-in-out;
  transition: background 300ms ease-in-out;

  &:hover{
    background-position: 100%;
    color:  #d87d4a;
    border: 3px solid #d87d4a;
  }
`;


