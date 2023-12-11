import styled from "styled-components";
import { device } from "../devices";

export const Footer = styled.footer`
  background-color: #101010;
  .footer__nav_mobile {
    display: block;
  }
  .footer__nav_desktop {
    display: none;
  }
  @media (${device.mobileS}) {
    height: 100%;
    margin-top: 50px;

    .rectangle {
      width: 101px;
      height: 4px;
      position: absolute;
      background: #d87d4a;
      left: 50%;
      margin-left: -50px;
      margin-top: -0px;
    }

    .footer__wrapper {
      padding: 53px 25px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      p {
        padding: 18px 0px;
        font-size: 15px;
        font-style: normal;
        text-align: center;
        font-weight: 500;
        line-height: 25px;
        color: #fff;
        opacity: 0.5;
      }
      .footer__nav_mobile {
        padding: 30px 0px;
        ul {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 15px 0px;
        }

        li {
          color: #fff;
          letter-spacing: 2px;
          font-weight: 700;
          list-style-type: none;
          line-height: 25px;
          font-size: 13px;
        }
      }

      .section__1 {
        gap: 30px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        span {
          color: #fff;
          font-size: 15px;
          font-style: normal;
          font-weight: 700;
          opacity: 0.5;
          line-height: 25px;
        }
      }
    }
  }

  @media (${device.laptop}) {
    height: 365px;
    margin-top: 50px;
    position: relative;

    .rectangle {
      width: 101px;
      height: 4px;
      position: absolute;
      background: #d87d4a;
      left: 1%;
      margin-left: -0px;
      margin-top: -0px;
    }
    .footer__wrapper {
      padding: 12px;
      height: 100%;
      display: flex;
      align-items: start;
      justify-content: space-between;
      transform: translateY(55px);
      flex-direction: row;
      p {
        padding: 18px 0px;
        width: 540px;
        font-size: 15px;
        text-align: justify;
        font-style: normal;
        font-weight: 500;
        line-height: 25px;
        color: #fff;
        opacity: 0.5;
      }

      .section__1 {
        display: flex;
        align-items: start;
        justify-content: space-between;
        flex-direction: column;
        gap: 30px 0;

        span {
          color: #fff;
          font-size: 15px;
          font-style: normal;
          font-weight: 700;
          opacity: 0.5;
          line-height: 25px;
        }

        .footer__nav_mobile {
          display: none;
        }
      }

      .footer__nav_desktop {
        display: block;
        padding: 0px;
        ul {
          display: flex;
          align-items: center;
          gap: 0px 45px;

          li {
            color: #fff;
            letter-spacing: 2px;
            font-weight: 700;
            list-style-type: none;
            line-height: 25px;
            font-size: 13px;
          }
        }
      }
    }
  }
`;
