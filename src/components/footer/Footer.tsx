import { Footer } from "./footer.styled";
import { Logo } from "../logo";
import { Container } from "../reuseable-styles/reuse.styled";
import { routes } from "../index";

export const PageFooter = () => {
  return (
    <Footer>
      <Container>
        <div className="rectangle"></div>
        <div className="footer__wrapper">
          <div className="section__1">
            <Logo />
            <div className="footer__nav_mobile">
              <ul>
                {routes.map((link, index) => (
                  <li key={index}>{link.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <p>
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we’re open 7 days a week.
              </p>
            </div>
            {/* footer__nav_mobile */}
            <span>Copyright 2021. All Rights Reserved</span>
          </div>

          <div className="footer__nav_desktop">
            <ul>
              {routes.map((link, index) => (
                <li key={index}>{link.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Footer>
  );
};
