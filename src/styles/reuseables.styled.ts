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
  grid-template-columns: repeat(1, 1fr);
  a {
    text-decoration: none;
    color: inherit;
  }
  @media (${device.mobileS}) {
    margin: 85px 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    gap: 15px 0px;
    div.product__img {
      height: 452px;
      border-radius: 8px;
      background: #f1f1f1;
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        max-width: 220px;
        width: 100%;
        height: 263px;
        object-fit: contain;
      }
      .oval__shadow {
        position: absolute;
        width: 262px;
        height: 56px;
        flex-shrink: 0;
        border-radius: 262px;
        opacity: 0.1521;
        background: #000;
        filter: blur(21.746253967285156px);
        bottom: 15%;
      }
    }

    .product__content {
      span {
        color: #d87d4a;
        margin: 25px 0px;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        display: inline-block;
        text-align: left !important;
        letter-spacing: 10px;
        text-transform: uppercase;
      }
      h2 {
        color: #000;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1px;
        text-align: left;
        text-transform: uppercase;
      }
      p {
        color: #000;
        margin: 20px 0px;
        font-size: 15px;
        font-style: normal;
        text-align: left;
        font-weight: 500;
        line-height: 25px; /* 166.667% */
        opacity: 0.5;
      }
    }
  }
  @media (${device.tablet}) {
  }
  @media (${device.laptop}) {
    min-height: 100vh;

    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: left;
    position: relative;
    gap: 0 105px;
    flex-grow: 1;
    h4 {
      color: #000;

      font-size: 18px;
      margin: 35px 0px;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 1.286px;
      text-transform: uppercase;
    }
    div.product__img {
      height: 660px;

      width: 580px;
      border-radius: 8px;
      background: #f1f1f1;
      display: flex;

      align-items: center;
      justify-content: center;
      flex-direction: column;
      img {
        max-width: 349.238px;
        width: 100%;
        height: 386px;
        object-fit: contain;
      }

      .oval__shadow {
        position: absolute;
        width: 262px;
        height: 56px;
        flex-shrink: 0;
        border-radius: 262px;
        opacity: 0.1521;
        background: #000;
        filter: blur(21.746253967285156px);
        bottom: 14%;
      }
    }

    .product__content {
      span {
        color: #d87d4a;
        margin: 25px 0px;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        display: inline-block;
        letter-spacing: 10px;
        text-transform: uppercase;
      }
      h2 {
        color: #000;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 44px; /* 110% */
        letter-spacing: 1.429px;
        text-align: left;
        text-transform: uppercase;
      }
      p {
        color: #000;
        margin: 20px 0px 35px;
        font-size: 15px;
        font-style: normal;
        text-align: left;
        font-weight: 500;
        line-height: 25px; /* 166.667% */
        opacity: 0.5;
      }
    }
  }
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

export const Features = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  margin: 85px 25px;

  h2 {
    color: #000;
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 150% */
    letter-spacing: 0.857px;
    text-transform: uppercase;
    margin: 24px 0px;
  }

  p {
    color: #000;
    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 166.667% */
    opacity: 0.5;
    margin: 24px 0px;
  }
  .inBox {
    margin-top: 30px;

    .box-content {
      display: flex;
      align-items: center;
      margin-bottom: 14px;
      gap: 0 14px;

      span#tag {
        color: #d87d4a;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        display: inline-block;
        line-height: 25px;
        opacity: 1;
      }

      span {
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        display: inline-block;
        line-height: 25px;
        opacity: 0.5;
      }
    }
  }

  @media (${device.laptop}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .inBox {
      flex-grow: 1;
    }
  }
`;
