import styled from "styled-components";
import { device } from "../components/devices";

export const HeroSection = styled.div`
  width: 100%;
  height: 192px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0px 0px 8px 8px;
  background: #000;

  h2 {
    color: #fff;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding-top: 84px;
  }

  @media (${device.tablet}) {
    width: 100%;
    height: 336px;
    h2 {
      font-size: 40px;
      font-weight: 700;
      line-height: 44px;
      letter-spacing: 1.429px;
      padding-top: 124px;
    }
  }
`;

export const ProductDisplay = styled.div`
  display: grid;
`;

export const Container = styled.div`
  max-width: 100%;
  position: relative;
  @media (${device.laptop}) {
    margin: 0 auto;
    max-width: 1050px;
  }
  @media (${device.laptopL}) {
    margin: 0 auto;
    max-width: 1200px;
  }
  @media (${device.desktop}) {
    margin: 0 auto;
    max-width: 1650px;
  }
`;

export const MarginBox = styled.div`
  margin: 48px 0px;
  @media (${device.mobileS}) {
    margin: 108px 0px;
  }

  @media (${device.laptop}) {
    margin: 148px 0px;
  }
`;
