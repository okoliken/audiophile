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
  h4 {
    color: #000;

    font-size: 18px;
    margin: 25px 0px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.286px;
    text-transform: uppercase;
  }

  .product__content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    span {
      color: #d87d4a;
      margin: 25px 0px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      display: inline-block;
      text-align: center !important;
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
      text-align: center;
      text-transform: uppercase;
    }
    p {
      color: #000;
      margin: 20px 0px;
      font-size: 15px;
      font-style: normal;
      text-align: center;
      font-weight: 500;
      line-height: 25px; /* 166.667% */
      opacity: 0.5;
    }
  }
  @media (${device.mobileS}) {
    margin: 25px 25px;
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
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
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
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
      p {
        color: #000;
        margin: 20px 0px;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 25px; /* 166.667% */
        opacity: 0.5;
      }
    }
  }
  @media (${device.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 50px;

    .product__content {
      display: flex;
      align-items: start;
      justify-content: start;
      flex-direction: column;
      span {
        color: #d87d4a;
        margin: 25px 0px;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        display: inline-block;
        letter-spacing: 10px;
        text-align: left !important;
        text-transform: uppercase;
      }
      h2 {
        text-align: left;
      }
      p {
        text-align: left;
      }
    }
  }
  @media (${device.laptop}) {
    min-height: 100vh;
    margin: 15px 0px;
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
      display: flex;
      align-items: start;
      justify-content: start;
      flex-direction: column;
      span {
        color: #d87d4a;
        margin: 25px 0px;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: left;
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
        text-align: left;
        text-transform: uppercase;
      }
      p {
        color: #000;
        /* margin: 20px 0px 35px; */
        font-size: 15px;
        font-style: normal;
        text-align: left;
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


export const Card = styled.div`
  max-width: 100%;
  padding: 30px;
  background-color: #fff;
  width: 100%;
  border-radius: 8px;
  p {
      color: #d87d4a;
      font-size: 14px;
      font-weight: 700;
      line-height: 25px;
      letter-spacing: 0.9285714030265808px;
      text-align: left;
      text-transform: uppercase;
      margin-top: 30px;
      margin-bottom: 10px;
    }

    h1 {
      font-size: 32px;
      line-height: 28px;
      margin-bottom: 12px;
    }

    h2 {
      text-transform: uppercase;
    }

  @media (${device.tablet}) {
    padding: 15px;
    p {
      color: #d87d4a;
      font-size: 14px;
      font-weight: 700;
      line-height: 25px;
      letter-spacing: 0.9285714030265808px;
      text-align: left;
      text-transform: uppercase;
      margin-top: 30px;
      margin-bottom: 10px;
    }

    h1 {
      font-size: 32px;
      line-height: 36px;
      margin-bottom: 12px;
    }

    h2 {
      text-transform: uppercase;
    }
  }

  @media (${device.laptop}) {
    padding: 42px;

    p {
      color: #d87d4a;
      font-size: 14px;
      font-weight: 700;
      line-height: 25px;
      letter-spacing: 0.9285714030265808px;
      text-align: left;
      text-transform: uppercase;
      margin-top: 30px;
      margin-bottom: 10px;
    }

    h1 {
      font-size: 32px;
      line-height: 36px;
      margin-bottom: 12px;
    }

    h2 {
      text-transform: uppercase;
    }
  }
`;

export const ReOrderProducts = styled.div<{ index: number }>`
  order: "unset";

  @media (${device.tablet}) {
    order: ${({ index }) => (index === 1 ? 4 : "unset")};
  }
`;

export const MarginBox = styled.div`
  margin: 48px 0px;
  @media (${device.mobileS}) {
    margin: 108px 0px;
  }

  @media (${device.laptop}) {
    margin: 180px 0px;
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
    align-items: start;
    width: 100%;
    justify-content: space-between;
    gap: 0 120px;
    margin: 88px 0px;
    .features {
      width: 60%;
    }

    .inBox {
      width: 40%;

      .box-content {
        display: flex;
        align-items: center;
        margin-bottom: 14px;
        gap: 0 18px;

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
  }
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 25px 0px;
  margin-top: 30px;
  @media (${device.tablet}) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 0 20px;
    margin-top: 15px;

    .cc-8 {
      grid-column: span 12;
    }
    .cc-4 {
      grid-column: span 12;
      height: 612px;
      overflow-y: auto;

      .product-details {
        margin-top: 25px;
      }
    }
  }
  @media (${device.laptop}) {
    margin-top: 40px;
    gap: 0 24px;
    .cc-8 {
      grid-column: span 8;
    }
    .cc-4 {
      grid-column: span 4;
      height: 612px;
      overflow-y: auto;

      .product-details {
        margin-top: 25px;
      }
    }
  }
`;

export const Grid = styled.div<{noGap?:boolean}>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${($props) => $props.noGap ? '0px 0px' : '20px 0px'};
  margin-top: 0px;
  height: 100%;
  @media (${device.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap:${($props) => $props.noGap ? '0px 0px' : '0px 20px'};
    margin-top: 15px;
  }
  @media (${device.laptop}) {
    gap:${($props) => $props.noGap ? '0px 0px' : '0px 20px'};
  }
`;

export const FlexItem = styled.div<{ justify?: string; align?:string, margin?: string, gap?:string }>`
  display: flex;
  align-items:${(props) => props.align ? props.align : 'center'};
  gap: ${({gap}) => gap ? gap : '0 12px'};
  margin-bottom: ${(props) => props.margin};
  justify-content: space-${(props) => props.justify};
  width: 100%;
  h4 {
    font-size: 15px;
    font-weight: 700;
  }

  .labels {
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    opacity: 0.4;
  }

  .total {
    color: #d87d4a;
  }
`;
