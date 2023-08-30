import { Link } from "react-router-dom";
import styled from "styled-components";

export const WidgetWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  border-radius: 35px;
  background-color: ${({ background }) => background};
  width: 100%;
`;

export const WidgetImage = styled.div`
  width: 150px;
  height: 150px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const WidgetContent = styled.div`
  margin-left: 35px;
`;

export const WidgetTitle = styled.h3``;

export const WidgetText = styled.div``;

export const WidgetButton = styled(Link)`
  padding: 15px;
  color: #fff;
  background: #1e1e1e;
  border-radius: 5px;
  margin-top: 20px;
  display: inline-block;
`;
