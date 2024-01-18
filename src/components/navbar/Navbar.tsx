import { FlexContainer } from "./navbar.styled";
import styled from "styled-components";
import { Logo } from "../logo";
import { Menu } from "../menu";
import { CartIcon } from "../cart/cartIcon";
import { routes } from "../index";
import { NavLink } from "react-router-dom";
import { Container } from "../../styles/styles.styled";
import { device } from "../devices";
import { Cart } from "../cart/cart";
import { BottomDrawer } from "./BottomDrawer";
import { useState } from "react";
import { useToggler } from "../../hooks/useToggle";

const NavBar = styled.div`
  background-color: transparent;
  width: 100%;
  z-index: 100;
  position: absolute;
  @media (${device.tablet}) {
    padding: 0px 34px;
  }

  @media (${device.laptop}) {
  }
`;

export const Navbar = () => {
  const [cartMenu, openCart] = useState(false);
  const { isToggled, toggleMobileDrawer } = useToggler();

  const openCartMenu = () => {
    openCart(true);
  };

  const closeCartModal = () => {
    openCart(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <NavBar>
        <Container>
          <FlexContainer>
            <Menu toggleBottomDrawer={toggleMobileDrawer} />
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
            <CartIcon openCartMenu={openCartMenu} />
          </FlexContainer>
        </Container>
      </NavBar>
      <BottomDrawer isOpen={isToggled} onClose={toggleMobileDrawer}>
        <ul className="bottom__nav_drawer">
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
      </BottomDrawer>
      <Cart isOpen={cartMenu} onClose={closeCartModal} />
    </div>
  );
};
