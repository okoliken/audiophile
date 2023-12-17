import {
  Container,
  HeroBanner,
  SpeakerAdvert,
  XZ7PRODUCT,
  EarPodsCTA,
} from "../components/styles/styles.styled";
import { ProductShowCase } from "../components/product/product-showcase";
import { Button } from "../components/button/Button";
import { account } from "../lib/appwrite";
import Speaker from "../assets/small-speaker.png";
import SpeakerDesktop from "../assets/speaker-desk.png";
import bitMapMobile from "../assets/bitmap-mobile.png";
import bitMapTablet from "../assets/bitmap-tab.png";
import bitMapLaptop from "../assets/bitmap-desk.png";
import Earpods from "../assets/earpods.png";

export const Home = () => {
  const handleLogin = () => {
    account.createOAuth2Session(
      "google",
      "http://audiophile-tawny-tau.vercel.app",
      "http://audiophile-tawny-tau.vercel.app/"
    );
  };
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
            <Button onClick={() => handleLogin()} buttonType="dark">
              See Product
            </Button>
          </div>
        </SpeakerAdvert>
      </Container>

      <Container>
        <XZ7PRODUCT>
          <div>
            <div>
              <div className="call-action">
                <h3>ZX7 SPEAKER</h3>
                <Button variant="outline" buttonType="dark">
                  See Product
                </Button>
              </div>

              <img
                className="bit-mobile"
                src={bitMapMobile}
                alt="bitMapMobile"
              />
            </div>
            <div>
              <img
                className="bit-tablet"
                src={bitMapTablet}
                alt="bitMapTablet"
              />
            </div>
            <div>
              <img
                className="bit-desktop"
                src={bitMapLaptop}
                alt="bitMapLaptop"
              />
            </div>
          </div>
        </XZ7PRODUCT>

        <EarPodsCTA>
          <img src={Earpods} alt="Earpods" />

          <div className="cta-container">
            <div className="cta-action">
              <h3>ZX7 SPEAKER</h3>
              <Button variant="outline" buttonType="dark">
                See Product
              </Button>
            </div>
          </div>
        </EarPodsCTA>
      </Container>
    </>
  );
};
