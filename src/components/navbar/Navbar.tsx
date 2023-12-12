import { FlexContainer } from "./navbar.styled";
import styled from "styled-components";
import { Logo } from "../logo";
import { Menu } from "../menu";
import { CartIcon } from "../cart";
import { routes } from "../index";
import { Link } from "react-router-dom";
import { Container } from "../reuseable-styles/reuse.styled";
import { device } from "../devices";

const NavBar = styled.div`
  background-color: #101010;
  min-height: 100%;
  height: 100%;

  @media (${device.tablet}) {
    padding: 0px 34px;
  }
`;

export const Navbar = () => {
  return (
    <>
      <NavBar>
        <Container>
          <FlexContainer>
            <Menu />
            <div className="header__menu">
              <Logo />
            </div>
            <ul className="Header__Desktop">
              {routes.map((link, index) => (
                <li key={index}>
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
            <CartIcon />
          </FlexContainer>
        </Container>
      </NavBar>
    </>
  );
};
