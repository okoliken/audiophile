import styled from "styled-components";
import { device } from "../devices";

export const FlexContainer = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(76, 76, 76, 0.2);
  opacity: border 0.104;
  background-color: #101010;
  justify-content: space-between;
  padding: 22px 20px;

  #menu {
    display: block;
  }

  ul.Header__Desktop {
    display: none;
  }

  @media (${device.mobileS}) {
    padding: 28px 20px;
    .header__menu {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
  }

  @media (${device.tablet}) {
    .header__menu {
      display: flex;
      align-items: start;
      justify-content: start;

      svg {
        margin-left: 38px;
      }
    }
  }

  @media (${device.laptop}) {
    padding: 38px 20px;
    #menu {
      display: none;
    }

    .header__menu {
      width: inherit;
      svg {
        margin-left: 0;
      }
    }

    ul.Header__Desktop {
      display: flex;
      align-items: center;
      gap: 0px 45px;
      li {
        a {
          color: #fff;
          letter-spacing: 2px;
          font-weight: 700;
          list-style-type: none;
          line-height: 25px;
          font-size: 13px;
          text-decoration: none;
          transition: all 0.2s ease;
          &:hover {
            color: rgba(216, 125, 74, 1);
          }
        }

        a.active {
          color: rgba(216, 125, 74, 1);
        }
      }
    }
  }
`;
