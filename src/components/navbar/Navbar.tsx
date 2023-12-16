import { FlexContainer } from "./navbar.styled";
import styled from "styled-components";
import { Logo } from "../logo";
import { Menu } from "../menu";
import { CartIcon } from "../cart";
import { routes } from "../index";
import { NavLink } from "react-router-dom";
import { Container } from "../styles/styles.styled";
import { device } from "../devices";

const NavBar = styled.div`
  background-color: transparent;
  width: 100%;
  z-index: 100;
  position: absolute;
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
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to={link.link}
                  >
                    {link.name}
                  </NavLink>
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
