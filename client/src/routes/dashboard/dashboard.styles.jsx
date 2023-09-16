import styled from "styled-components";
import { devices } from "../../stylesConfig";

export const DashboardWrapper = styled.div`
  width: 88%;
  float: right;
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  padding: 25px;
  background: #f0f5fb;

  @media screen and (max-width: ${devices.laptop}) {
    position: relative;
    padding: 0;
    float: none;
    width: 100%;
  }
`;

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => (columns ? columns : "1fr 1fr")};
  grid-template-rows: repeat(4, 1fr);
  column-gap: 1.5rem;
  gap: 1rem;

  @media screen and (max-width: ${devices.laptop}) {
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 100%;
    padding: 50px 15px;
  }
`;
