import { Link } from "react-router-dom";
import styled from "styled-components";
import { devices, fontSizes } from "../../stylesConfig";

export const NavLinkItem = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  width: 100%;
  padding-left: 5%;
  margin-bottom: 3rem;

  @media screen and (max-width: ${devices.laptop}) {
    font-size: ${fontSizes.medium};
  }

  @media (min-width: ${devices.laptop}) and (max-width: ${devices.laptopM}) {
    font-size: ${fontSizes.extraSmall};
  }

  span {
    margin-right: 7%;
  }
`;
