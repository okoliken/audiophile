import styled from "styled-components";
import { device } from "../devices";

export const ProductContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(1, 1fr);
  gap: 78px 0px;
  width: 100%;
  place-items: center;
  text-align: center;

  img {
    width: 147px;
    height: 133px;
    max-width: 100%;
    object-fit: contain;
    transform: translateY(-56px);
  }

  .product__xy {
    width: 100%;
    max-width: 327px;
    height: 165px;
    border-radius: 8px;
    background: #f1f1f1;
  }
  @media (${device.mobileS}) {
    gap: 108px 0px;
    grid-template-columns: repeat(1, 1fr);
    img {
      width: 145px;
      max-width: 100%;
      height: 130px;
      max-width: 100%;
      transform: translateY(-56px);
    }

    .product__xy {
      width: 100%;
      max-width: 327px;
      height: 165px;

      h3 {
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1.286px;
        text-transform: uppercase;
        font-size: 15px;
        margin-bottom: 12px;
      }

      &:hover a {
        color: #d87d4a;
        opacity: 1;
      }
      a {
        font-size: 13px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #000;
        opacity: 0.5;
        text-decoration: none;
      }
    }

    .product__content {
      transform: translateY(-42px);
    }
  }
  @media (${device.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (${device.laptop}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0 45px;
    .product__xy {
      max-width: 100%;
      height: 204px;
      border-radius: 8px;
      background: #f1f1f1;

      h3 {
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1.286px;
        text-transform: uppercase;
        margin-bottom: 12px;
      }
    }

    img {
      width: 147px;
      height: 161px;
      max-width: 100%;
      object-fit: contain;
      transform: translateY(-85px);
    }

    .product__content {
      transform: translateY(-52px);
      cursor: pointer;
      &:hover a {
        color: #d87d4a;
        opacity: 1;
      }
      a {
        font-size: 13px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #000;
        opacity: 0.5;
        text-decoration: none;
      }
    }
  }
`;
