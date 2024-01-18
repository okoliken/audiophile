import styled from "styled-components";
import { device } from "../components/devices";

export const Backdrop = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;

  @media (${device.tablet}) {
    display: none;
  }
`;

export const StyledDrawer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  transition: transform 0.3s ease;
  transform: translateY(${({ isOpen }) => (isOpen ? 0 : "100%")});
  z-index: 1001;

  @media (${device.tablet}) {
    display: none;
  }
`;

export const DrawerHandle = styled.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 35px;
  height: 4px;
  background-color: #ccc;
  border-radius: 2px;
  margin: 12px 0;

  @media (${device.tablet}) {
    display: none;
  }
`;

export const DrawerContent = styled.div`
  padding: 25px;
  overflow: auto;

  .bottom__nav_drawer {
    li {
      margin-top: 20px;
      margin: 20px 0;
      a {
        text-decoration: none;
        color: #000;
        font-weight: 700;
        margin: 20px 0;
      }
    }
  }

  @media (${device.tablet}) {
    display: none;
  }
`;
