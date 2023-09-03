import styled, { keyframes } from "styled-components";
import { devices } from "../../stylesConfig";

const slideAnimationOpen = keyframes`
  0% {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(-0px);
            transform: translateX(-0px);
  }
`;

const slideAnimationClose = keyframes`
  0% {
    -webkit-transform: translateX(-0px);
            transform: translateX(-0px);
  }
  100% {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
  }
`;

export const NavigationWarpper = styled.div`
  height: 100vh;
  background: #1e1e1e;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 12%;

  @media screen and (max-width: ${devices.laptop}) {
    display: none;
  }
`;

export const NavLogo = styled.div`
  position: absolute;
  top: 5%;
  width: 100px;
  height: 100px;

  svg {
    width: 100px;
    height: 100px;
  }
`;

export const MobileMenu = styled.div`
  background: #1e1e1e;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 75%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${({ opened }) =>
      opened ? slideAnimationOpen : slideAnimationClose}
    0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const MobileMenuButton = styled.div`
  display: none;
  position: absolute;
  top: 0.7rem;
  right: 1.5rem;
  z-index: 1000;

  @media screen and (max-width: ${devices.laptop}) {
    display: flex;
  }
`;
