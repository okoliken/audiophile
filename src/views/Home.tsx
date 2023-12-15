import {
  Container,
  HeroBanner,
} from "../components/reuseable-styles/reuse.styled";
import { ProductShowCase } from "../components/product/product-showcase";
import { Button } from "../components/button/Button";
import Ring from "../assets/ring.svg";
import Speaker from "../assets/small-speaker.png";
import SpeakerDesktop from "../assets/speaker-desk.png";
import styled from "styled-components";
import { device } from "../components/devices";

const SpeakerAdvert = styled.div`
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
  background-size: 100%;
  background-position: top;

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
    height: 560px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;

    background-image: url(${Ring});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: top right;
    .img-m-t {
      display: none;
    }

    .img-d {
      display: block;
      height: 490px;
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

export const Home = () => {
  return (
    <>
      <HeroBanner>
        <Container>
          <div className="hero__Text">
            <span>NEW PRODUCT</span>
            <h1>
              XX99 Mark II <br /> Headphones
            </h1>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>

            <Button buttonType="primary">See Product</Button>
          </div>
        </Container>
      </HeroBanner>
      <ProductShowCase />

      <Container>
        <SpeakerAdvert>
          <img className="img-m-t" src={Speaker} alt="mobile img" />
          <img className="img-d" src={SpeakerDesktop} alt="desktop img" />

          <div className="flex__items">
            <h3>ZX9 SPEAKER</h3>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button buttonType="dark">See Product</Button>
          </div>
        </SpeakerAdvert>
      </Container>
    </>
  );
};
