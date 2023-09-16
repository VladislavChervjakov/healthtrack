import styled from "styled-components";
import { BaseButton } from "../button/button.styles";

export const ControlWidgetWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ background }) => (background ? background : "")};
  border-radius: 35px;
  padding: 15px;
  flex-direction: column;
`;
export const ControlWidgetButtons = styled.div`
  display: flex;
  margin-top: 2rem;

  ${BaseButton} {
    margin-right: 15px;
  }
`;
export const ControlwidgetHeading = styled.h3``;
