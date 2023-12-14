import styled from "styled-components";
import { device } from "../devices";
import BannerHero from "../../assets/banner-hero.png";
import BannerHeroMobile from "../../assets/banner-hero-mobile.png";

export const Container = styled.div`
  max-width: 100%;
  position: relative;
  @media (${device.laptop}) {
    margin: 0 auto;
    max-width: 1050px;
  }
  @media (${device.laptopL}) {
    margin: 0 auto;
    max-width: 1240px;
  }
  @media (${device.desktop}) {
    margin: 0 auto;
    max-width: 1650px;
  }
`;

export const HeroBanner = styled.div`
  background-color: #101010;
  position: relative;
  min-height: 100%;
  height: 700px;
  background-image: url(${BannerHeroMobile});
  background-size: 400px;
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
  @media (${device.mobileS}) {
    background-color: #101010;
    position: relative;
    min-height: 100%;
    height: 700px;
    background-image: url(${BannerHeroMobile});
    background-size: 400px;
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
        width: 100%;
        font-style: normal;
        font-weight: 500;
        line-height: 25px;
      }
    }
  }
  @media (${device.tablet}) {
    background-color: #101010;
    position: relative;
    min-height: 100%;
    height: 700px;
    background-image: url(${BannerHeroMobile});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;

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
    min-height: 100vh;
    gap: 0 84px;
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
