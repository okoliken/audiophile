import { Header } from "./navbar.styled";
import { Logo } from "../logo";
import { Menu } from "../menu";
import { CartIcon } from "../cart";
import { routes } from "../index";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Header>
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
      </Header>
    </>
  );
};
