import styled from "styled-components";
import { devices } from "../../stylesConfig";

export const DashboardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  column-gap: 25px;
  gap: 15px;
  width: 88%;
  float: right;
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  padding: 25px;
  background: #f0f5fb;

  @media screen and (max-width: ${devices.laptop}) {
    display: flex;
    flex-direction: column;
    position: relative;
    float: none;
    width: 100%;
    padding: 75px 15px;
  }
`;
