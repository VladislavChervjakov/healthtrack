import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLinkItem = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  width: 100%;
  padding-left: 5%;
  margin-bottom: 15%;

  span {
    margin-right: 7%;
  }
`;
