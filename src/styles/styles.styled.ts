import styled from "styled-components";
import { device } from "../components/devices";
import BannerHero from "../assets/banner-hero.png";
import BannerHeroMobile from "../assets/banner-hero-mobile.png";
import Ring from "../assets/ring.svg";
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

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0px 6px;
`;

export const HeroBanner = styled.div`
  background-color: #191919;
  position: relative;
  min-height: 700px;
  height: 100%;
  background-image: url(${BannerHeroMobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  a{
    color:inherit;
    text-decoration: none;
  }

  .hero__Text {
    padding-top: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 35px 0px;
    span {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 10px;
      text-transform: uppercase;
      opacity: 0.4964;
      color: #fff;
      display: inline-block;
      text-align: center;
    }

    h1 {
      color: #fff;
      text-align: center;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: 40px; /* 111.111% */
      letter-spacing: 1.286px;
      text-transform: uppercase;
    }

    p {
      color: #fff;
      text-align: center;
      opacity: 0.75;
      font-size: 15px;
      width: 328px;
      font-style: normal;
      font-weight: 500;
      line-height: 25px;
    }
  }
  @media (${device.mobileS}) {
    background-color: #191919;
    position: relative;
    min-height: 100%;
    height: 700px;
    background-image: url(${BannerHeroMobile});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    .hero__Text {
      padding-top: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 35px 0px;
      span {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 10px;
        text-transform: uppercase;
        opacity: 0.4964;
        color: #fff;
        display: inline-block;
        text-align: center;
      }

      h1 {
        color: #fff;

        text-align: center;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px; /* 111.111% */
        letter-spacing: 1.286px;
        text-transform: uppercase;
      }

      p {
        color: #fff;

        text-align: center;
        opacity: 0.75;
        font-size: 15px;
        width: 328px;
        font-style: normal;
        font-weight: 500;
        line-height: 25px;
      }
    }
  }
  @media (${device.tablet}) {
    background-color: #191919;
    position: relative;
    min-height: 100%;
    height: 700px;
    background-image: url(${BannerHeroMobile});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 0px 0px 8px 8px;
    .hero__Text {
      padding-top: 240px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 35px 0px;
      h1 {
        font-size: 56px;
        line-height: 58px;
        font-weight: 700;
        text-align: left;
      }
      p {
        color: #fff;

        text-align: center;
        opacity: 0.75;
        font-size: 15px;
        width: 349px;
        font-style: normal;
        font-weight: 500;
        line-height: 25px;
      }
    }
  }

  @media (${device.laptop}) {
    height: 729px;
    border-radius: none;
    transform: translateY(-5px);

    background-image: url(${BannerHero});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    .hero__Text {
      padding-top: 240px;
      display: flex;
      align-items: start;
      justify-content: start;
      flex-direction: column;
      gap: 35px 0px;
      h1 {
        font-size: 56px;
        line-height: 58px;
        font-weight: 700;
        text-align: left;
      }
      p {
        color: #fff;

        text-align: left;
        opacity: 0.75;
        font-size: 15px;
        width: 349px;
        font-style: normal;
        font-weight: 500;
        line-height: 25px;
      }
    }
  }

  @media (${device.laptopL}) {
    background-position: center;
    height: 820px;
  }
  @media (${device.desktop}) {
    background-position: center;
  }
`;


export const SubSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  padding: 20px;
  gap: 0px;
  img {
    border-radius: 10px;
    max-width: 100%;
    height: auto; /* Maintain aspect ratio */
    flex-shrink: 0; /* Prevent flex items from shrinking */
    object-fit: cover; /* Ensure images cover their area without stretching */
  }
  .subsection__headset_xy_image-tablet {
    display: none;
  }
  .subsection__content {
    h2 {
      color: #000;
      font-size: 24px;
      text-align: center;
      margin-bottom: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    span {
      color: #d87d4a;
    }
    p {
      color: #000;
      margin: 12px 0px;
      text-align: center;
      font-family: Manrope;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 25px;
      opacity: 0.5;
    }
  }

  .subsection__headset_xy_image-mobile {
    margin: 30px 0px;

    display: block;
  }

  .subsection__headset_xy_image-desktop {
    display: none;
  }
  @media (${device.mobileS}) {
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    gap: 0px;
    .subsection__content {
      h2 {
        font-size: 28px;
        margin-bottom: 16px;
        font-style: normal;
        text-align: center;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
      p {
        color: #000;
        margin: 12px 0px;
        text-align: center;
        font-family: Manrope;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 25px;
        opacity: 0.5;
      }
    }
    .subsection__headset_xy_image-mobile {
      margin: 30px 0px;
      display: block;
    }

    .subsection__headset_xy_image-desktop {
      display: none;
    }

    .subsection__headset_xy_image-tablet {
      display: none;
    }
  }
  @media (${device.tablet}) {
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    min-height: 100vh;
    gap: 0px;
    .subsection__headset_xy_image-mobile {
      display: none;
    }

    .subsection__content {
      h2 {
        font-size: 40px;
        margin-bottom: 26px;
        font-style: normal;
        text-align: center;
        font-weight: 700;
        padding: 0 55px;
        line-height: 44px; /* 110% */
        letter-spacing: 1.429px;
        text-transform: uppercase;
      }
      p {
        color: #000;
        margin: 12px 0px;
        text-align: center;
        font-family: Manrope;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 25px;
        opacity: 0.5;
      }
    }

    .subsection__headset_xy_image-desktop {
      display: none;
    }

    .subsection__headset_xy_image-tablet {
      display: block;
      margin-bottom: 55px;
    }
  }
  @media (${device.laptop}) {
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin: 105px 0;
    min-height: 100%;
    gap: 0 84px;
    padding: 0px;
    .subsection__headset_xy_image-mobile {
      display: none;
    }

    .subsection__content {
      h2 {
        font-size: 40px;
        margin-bottom: 26px;
        font-style: normal;
        padding: 0px;
        text-align: left;
        font-weight: 700;
        line-height: 44px;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
      p {
        color: #000;
        margin: 12px 0px;
        text-align: justify;
        font-family: Manrope;
        font-size: 15px;
        width: inherit;
        font-style: normal;
        font-weight: 500;
        line-height: 25px;
        opacity: 0.5;
      }
    }

    .subsection__headset_xy_image-desktop {
      display: block;
      width: 100%;
      max-width: 600px;
      min-height: 600px;
      object-fit: cover;
    }
    .subsection__headset_xy_image-tablet {
      display: none;
    }
  }
  @media (${device.desktop}) {
    align-items: center;
    justify-content: center;
    flex-direction: row;
    min-height: 100vh;
    gap: 0 104px;
    .subsection__headset_xy_image-mobile {
      display: none;
    }

    .subsection__content {
      h2 {
        font-size: 50px;
        margin-bottom: 26px;
        font-style: normal;
        padding: 0px;
        text-align: left;
        font-weight: 700;
        line-height: 44px;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
      p {
        color: #000;
        margin: 12px 0px;
        text-align: justify;
        font-family: Manrope;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 35px;
        opacity: 0.5;
      }
    }

    .subsection__headset_xy_image-desktop {
      display: block;
      width: 100%;
      max-width: 1200px;
      min-height: 800px;
      object-fit: cover;
    }
    .subsection__headset_xy_image-tablet {
      display: none;
    }
  }
`;

export const SpeakerAdvert = styled.div`
  border-radius: 8px;
  background: #d87d4a;
  height: 600px;
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  background-image: url(${Ring});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;

  .img-m-t {
    display: block;
  }

  .img-d {
    display: none;
  }
  img {
    height: 207px;
  }
  h3 {
    padding: 15px;
    color: #fff;

    text-align: center;

    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 111.111% */
    letter-spacing: 1.286px;
    text-transform: uppercase;
  }
  p {
    margin-bottom: 10px;
    color: #fff;
    padding: 15px;
    text-align: center;
    width: 280px;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
  }
  h3,
  p {
    text-align: center;
  }

  .flex__items {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media (${device.mobileM}) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media (${device.tablet}) {
    height: 720px;
    h3 {
      margin: 15px 0;
      width: 349px;
      font-size: 56px;
      line-height: 58px; /* 103.571% */
      letter-spacing: 2px;
      padding: 15px;
    }

    p {
      width: 349px;
    }
  }

  @media (${device.laptop}) {
    padding: 0;
    height: 560px;
    display: flex;
    align-items: center;
    /* justify-content: space-around; */
    gap: 0 75px;
    flex-direction: row;
    margin: 0px;
    background-image: url(${Ring});
    background-repeat: no-repeat;
    background-size: 75%;
    background-position: left;
    .img-m-t {
      display: none;
    }

    .img-d {
      display: block;
      height: 493px;
      object-fit: contain;
      transform: translateY(35px);
    }
    h3 {
      text-align: left;
      padding: 0;
      font-size: 56px;
      margin-bottom: 25px;
      line-height: 58px;
    }
    p {
      text-align: left;
      margin-bottom: 25px;
      padding: 0;
      opacity: 0.75;
    }
    .flex__items {
      display: flex;
      align-items: start;
      justify-content: start;
      flex-direction: column;
    }

    button {
      margin-top: 12px;
    }
  }
`;

export const XZ7PRODUCT = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 15px;
  border-radius: 8px;

  img {
    border-radius: 8px;
  }

  img.bit-mobile {
    display: block;
    width: 100%;
    max-width: 100%;
    height: 367px;
  }
  img.bit-tablet {
    display: none;
  }
  img.bit-desktop {
    display: none;
  }

  .call-action {
    position: absolute;
    
  }

  @media (${device.mobileS}) {
    img.bit-mobile {
      display: block;
    }
    img.bit-tablet {
      display: none;
      max-width: 761.494px;
      width: 100%;
      object-fit: fit;
      height: 527px;
    }
    img.bit-desktop {
      display: none;
    }

    .call-action {
      transform: translateX(30px) translateY(130px);

      a{
        color: inherit;
      }

      h3 {
        color: #000;
        font-family: Manrope;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 20px;
      }
    }
  }
  @media (${device.mobileM}) {
    img.bit-mobile {
      display: block;
      width: 100%;
    }
    img.bit-tablet {
      display: none;
      max-width: 761.494px;
      width: 100%;
      object-fit: fit;
      height: 527px;
    }
    img.bit-desktop {
      display: none;
    }
  }
  @media (${device.mobileL}) {
    img.bit-mobile {
      display: block;
    }
    img.bit-tablet {
      display: none;
      max-width: 761.494px;
      width: 100%;
      object-fit: fit;
      height: 527px;
    }
    img.bit-desktop {
      display: none;
    }
  }
  @media (${device.tablet}) {
    .call-action {
      transform: translateX(100px) translateY(200px);
      a{
        color: inherit;
      }
      h3 {
        color: #000;
        font-family: Manrope;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
    }
    img.bit-mobile {
      display: none;
    }
    img.bit-tablet {
      display: block;
      object-fit: cover;
      width: 100%;
    }
    img.bit-desktop {
      display: none;
    }
  }
  @media (${device.laptop}) {
    margin: 33px 0px;
    padding: 0;
    .call-action {
      transform: translateX(100px) translateY(180px);
      h3 {
        color: #000;
        font-family: Manrope;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
    }
    img.bit-mobile {
      display: none;
    }
    img.bit-tablet {
      display: none;
    }
    img.bit-desktop {
      display: block;
      width: 100%;
      max-width: 1247.239px;
      height: 380px;
    }
  }
`;

export const EarPodsCTA = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 15px;
  width: 100%;
  
  div.cta-container {
    border-radius: 8px;
    background: #f1f1f1;
    margin-top: 20px;
    width: 100%;
    height: 200px;
    padding: 30px;

    .cta-action {
      transform: translateX(0px);
      h3 {
        color: #000;
        margin-bottom: 12px;
        font-family: Manrope;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
    }
  }
  @media (${device.mobileS}) {
    img {
      width: 100%;
      max-width: 731.539px;
      border-radius: 8px;
      grid-template-columns: repeat(1, 1fr);
    }

    div.cta-container {
      border-radius: 8px;
      background: #f1f1f1;
      width: 100%;
      height: 200px;
      margin-top: 20px;
      padding: 30px;

      .cta-action {
        transform: translateX(0px);
        h3 {
          color: #000;
          margin-bottom: 12px;
          font-family: Manrope;
          font-size: 28px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
      }
    }
  }
  @media (${device.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0 25px;
    padding: 15px;
    img {
      width: 100%;
      max-width: 731.539px;
      height: 577.247px;
      object-fit: cover;
      border-radius: 8px;
    }
    div.cta-container {
      border-radius: 8px;
      background: #f1f1f1;
      max-width: 100%;
      width: 100%;
      margin-top: 0px;
      height: 100%;
      padding: 30px;

      .cta-action {
        transform: translateX(48px) translateY(75px);
        h3 {
          color: #000;
          margin-bottom: 12px;
          font-family: Manrope;
          font-size: 28px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
      }
    }
  }
  @media (${device.laptop}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0 35px;
    padding: 0px;
    img {
      max-width: 731.539px;
      border-radius: 8px;
      height: 100%;
    }

    div.cta-container {
      border-radius: 8px;
      background: #f1f1f1;
      width: 100%;
      height: 100%;
      padding: 30px;

      .cta-action {
        transform: translateX(48px) translateY(75px);
        h3 {
          color: #000;
          margin-bottom: 12px;
          font-family: Manrope;
          font-size: 28px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
      }
    }
  }
`;

export const Overlay = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5));
  width: 100%;
  min-height: 100vh;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  @media (${device.laptop}) {
    align-items: center;
    justify-content: center;
  }
`;

export const CartOverlay = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5));
  width: 100%;
  min-height: 100vh;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  @media (${device.laptop}) {
    align-items: start;
    justify-content: end;

    .animate__motion_div {
      position: relative;
      top: 12%;
      right: 10%;
    }
  }
`;


export const OrderConfirmation = styled.div`
  width: 100%;
  max-width: 540px;
  max-height: 513px;
  overflow-y: scroll;
  border-radius: 8px;
  background-color: #fff;
  position: relative !important;

  padding: 30px;
  z-index: 9999;
  flex-shrink: 0;

  .circular-tick{
    width:64px;
    height:64px;
    border-radius: 50%;
    margin-bottom: 25px;
    background-color: #D87D4A;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .actions{
    button{
     width: 100%;
    }
  }

  h2{
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.86px;
    margin: 10px 0;
  }

  p{
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
    margin-top: 12px;
    opacity: 0.4;
  }

  .products-purchased{
    background-color: #F1F1F1;
    padding: 29px 25px;
    border-radius: 8px  8px 0px 0px;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    gap: 20px 0px;
    img{
      width: 28px;
      height: 32px;
      object-fit: contain;
    }

    h4{
      font-size: 15px;
      line-height: 25px;
      font-weight: 700;
    }

    h5{
      font-size: 15px;
      opacity: 0.4;
      font-weight: 700;
    }

    p{
      margin: 0;
      font-weight: 700;
    }

    .border-b{
      width: 198px;
      height: 1px;
      text-align: center;
      border: 1px solid rgba(0, 0, 0, 0.08);
      opacity: border 0.08;
      
      p{
        font-size: 12px;
        cursor: pointer;
        padding: 10px 0;
      }
    }
  }

  .total-cost{
    border-radius: 0px  0px 8px 8px;
    background-color: #000000;
    padding: 20px;
    display: flex;
    height: 100%;
    /* align-items: start; */
    justify-content: end;
    flex-direction: column;
    h3{
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: #FFFFFF;
    opacity: 0.5;
    margin: 10px 0;
    }

    h4{
      font-weight: 700;
      font-size: 18px;
      line-height: 24.59px;
      color: #fff;
    }
  }

  @media (${device.laptop}) {
    .products-purchased{
      border-radius: 10px 0px 0px 10px;

    }

    .total-cost{
      border-radius: 0px 10px 10px 0px;
      padding: 40px 30px;
    }
  }
`

export const CartItem = styled.div`
  width: 100%;
  max-width: 377px;
  height: 488px;
  overflow-y: scroll;
  border-radius: 8px;
  background-color: #fff;
  position: relative !important;

  z-index: 9999;
  flex-shrink: 0;
  .cart__actions {
    position: sticky;
    bottom: 0%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 22px;
    .total__price{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 2px 0 14px 0;
      width: 100%;

      .label{
        color: #000;
        opacity: 0.4;
        font-size: 15px;
      }
      .price{
        color: #000;
        font-size: 18px;
        font-weight: 700;
      }
    }
    button {
      width: 100%;
    }
  }

  .empty__cart {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* margin: 10px 0; */
    height: 72%;
    p {
      color: #000;
      font-family: Manrope;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 25px; /* 166.667% */
      margin: 10px 0;
      opacity: 0.5;
    }
  }
  .cart__body{
    padding:0 24px;
    height: 60%;
    overflow-y: scroll;
  }
  .cart__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    position: sticky;
    top: 0%;
    width: 100%;
    background-color: #fff;
    z-index: 99999;
    h3 {
      color: #000;
      font-family: Manrope;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 1.286px;
      text-transform: uppercase;
    }

    p {
      color: #000;
      font-family: Manrope;
      font-size: 15px;
      cursor: pointer;
      font-style: normal;
      font-weight: 500;
      line-height: 25px; /* 166.667% */
      text-decoration-line: underline;
      opacity: 0.4;
    }
  }
`;

export const IncrementButton = styled.div`
  width: 120px;
  height: 48px;
  background: #f1f1f1;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    font-size: 13px;
    margin: 0%;
  }

  .increase,
  .decrease {
    color: #000;
    opacity: 0.4;
    text-align: center;
    font-size: 13px;
    margin: 0%;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  p.quantity {
    color: #000;
    margin: 0%;
    text-align: center;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  @media (${device.tablet}) {
    p {
      transform: translateY(0px);
      margin: 0%;
    }
  }
  @media (${device.laptop}) {
    p {
      cursor: pointer;
      margin: 0%;
      font-size: 14px !important;
      color: #000 !important;
    }
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 12px 18px;
  margin: 85px 25px;
  img {
    border-radius: 8px;
  }

  .first-slice {
    display: flex;
    flex-direction: column;
    gap: 18px 0px;
  }
  .first-slice img {
    width: 100%;
    max-width: 100%;

    object-fit: cover;
  }

  .second-slice img {
    width: 100%;
    max-width: 100%;
    height: 500px;
    object-fit: cover;
  }
  @media (${device.mobileS}) {
    .second-slice img {
      width: 100%;
      max-width: 100%;
      height: 500px;
      object-fit: cover;
    }
  }
  @media (${device.mobileM}) {
    .second-slice img {
      width: 100%;
      max-width: 100%;
      height: 500px;
      object-fit: cover;
    }
  }
  @media (${device.mobileL}) {
    .second-slice img {
      width: 100%;
      max-width: 100%;
      height: 500px;
      object-fit: cover;
    }
  }

  @media (${device.tablet}) {
    margin: 85px 25px;
    grid-template-columns: repeat(12, 1fr);

    .first-slice {
      display: flex;
      grid-column: span 5;
      flex-direction: column;
      gap: 18px 0px;
    }
    .second-slice {
      grid-column: span 7;
    }
    .first-slice img {
      width: 100%;
      max-width: 610px;
      height: 100%;
      object-fit: cover;
    }

    .second-slice img {
      width: 100%;
      height: 100%;
      max-width: 955px;
      object-fit: cover;
    }
  }
  @media (${device.laptop}) {
    margin: 85px 0px;
    grid-template-columns: repeat(12, 1fr);

    .first-slice {
      display: flex;
      grid-column: span 5;
      flex-direction: column;
      gap: 18px 0px;
    }
    .second-slice {
      grid-column: span 7;
    }
    .first-slice img {
      width: 100%;
      max-width: 610px;
      height: 100%;
      object-fit: cover;
    }

    .second-slice img {
      width: 100%;
      height: 100%;
      max-width: 955px;

      object-fit: cover;
    }
  }
`;

export const SimilarProducts = styled.div`
  .products {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  text-align: center;

  h2 {
    color: #000;

    text-align: center;

    font-size: 24px;

    font-weight: 700;
    line-height: 36px; /* 150% */
    letter-spacing: 0.857px;
    text-transform: uppercase;
  }
  margin: 100px 34px;
  .products {
    grid-template-columns: repeat(1, 1fr);
    gap: 50px 32px;
    margin: 42px 0px;

    p {
      margin: 35px 0;
      color: #000;
      text-align: center;

      font-size: 24px;

      font-weight: 700;
      line-height: normal;
      letter-spacing: 1.714px;
      text-transform: uppercase;
    }

    .product {
      border-radius: 8px;
      width: 100%;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: #f1f1f1;

      img {
        width: 60.566px;
        height: 87px;
      }
    }
  }
  @media (${device.mobileS}) {
    margin: 100px 34px;
    .products {
      grid-template-columns: repeat(1, 1fr);
      gap: 50px 32px;
      margin: 42px 0px;

      p {
        margin: 35px 0;
        color: #000;
        text-align: center;

        font-size: 24px;

        font-weight: 700;
        line-height: normal;
        letter-spacing: 1.714px;
        text-transform: uppercase;
      }

      .product {
        border-radius: 8px;
        width: 100%;
        height: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: #f1f1f1;

        img {
          width: 60.566px;
          height: 87px;
        }
      }
    }
  }

  @media (${device.tablet}) {
    margin: 100px 10px;
    .products {
      grid-template-columns: repeat(3, 1fr);
      gap: 0 32px;
      margin: 42px 0px;

      p {
        margin: 35px 0;
        color: #000;
        text-align: center;

        font-size: 24px;

        font-weight: 700;
        line-height: normal;
        letter-spacing: 1.714px;
        text-transform: uppercase;
      }

      .product {
        border-radius: 8px;
        width: 100%;
        height: 318px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: #f1f1f1;

        img {
          width: 148.305px;
          height: 193px;
        }
      }
    }
  }
  @media (${device.laptop}) {
    margin-top: 100px;
    .products {
      grid-template-columns: repeat(3, 1fr);
      gap: 0 32px;
      margin: 42px 0px;

      p {
        margin: 35px 0;
        color: #000;
        text-align: center;

        font-size: 24px;

        font-weight: 700;
        line-height: normal;
        letter-spacing: 1.714px;
        text-transform: uppercase;
      }

      .product {
        border-radius: 8px;
        width: 100%;
        height: 318px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: #f1f1f1;

        img {
          width: 148.305px;
          height: 193px;
          object-fit:contain;
        }
      }
    }
  }
`;


export const PaymentOptionCard = styled.div`

width: 100%;
max-width: 309px;
padding: 20px;
cursor: pointer;
margin-bottom: 12px;
border-radius: 8px;
display: flex;
transition: all 0.2s;

&:hover {
  border: 1px solid #d87d4a !important;
}
align-items: center;
gap: 0 16px;
.checkb-x {
  height: 20px;
  width: 20px;
  border: 1px solid #cfcfcf;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .checked {
    width: 10px;
    height: 10px;
    background-color: #d87d4a;
    border-radius: 100%;
  }
}

span {
  font-size: 14px;
  font-weight: 700;
  line-height: 19.12px;
  letter-spacing: -0.25px;
}
`;