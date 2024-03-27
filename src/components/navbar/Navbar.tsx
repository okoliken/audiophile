import { FlexContainer } from "./navbar.styled";
import styled from "styled-components";
import { Logo } from "../logo";
import { Menu } from "../menu";

import { CartIconWithBadge } from "../cart/cartIconwithBadge";
import { routes } from "../index";
import { NavLink, useNavigate } from "react-router-dom";
import { Container } from "../../styles/styles.styled";
import { device } from "../devices";
import { Cart } from "../cart/cart";
import { BottomDrawer } from "./BottomDrawer";
import { useMemo, useState } from "react";
import { useToggler } from "../../hooks/useToggle";
import { useLocalStorageCart } from "../../hooks/useLocalStorageCart";


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
  const [cartMenu, openCart] = useState(false);
  const { isToggled, toggleMobileDrawer } = useToggler();
  const navigate = useNavigate()
  const openCartMenu = () => {
    openCart(true);
  };

  const closeCartModal = () => {
    openCart(false);
  };

  const { cart } = useLocalStorageCart()


  const getTotalItems = useMemo(() => {
    return cart.reduce((total, currentItem) => total + currentItem.quantity, 0);
  }, [cart]);


  return (
    <div style={{ position: "relative" }}>
      <NavBar>
        <Container>
          <FlexContainer>
            <Menu toggleBottomDrawer={toggleMobileDrawer} />
            <div onClick={()=> navigate('/')} className="header__menu">
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
            <CartIconWithBadge itemCount={getTotalItems} openCartMenu={openCartMenu} />
          </FlexContainer>
        </Container>
      </NavBar>
      <BottomDrawer isOpen={isToggled} onClose={toggleMobileDrawer}>
        <ul className="bottom__nav_drawer">
          {routes.map((link, index) => (
            <li onClick={toggleMobileDrawer} key={index}>
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
