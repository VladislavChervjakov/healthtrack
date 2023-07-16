import styled from "styled-components";
import { Link } from "react-router-dom";

export const AuthPageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 60%;
  }
`;

export const AuthHeading = styled.div`
  h1 {
    font-size: 32px;
    line-height: 32px;
  }
`;

export const AuthLink = styled(Link)`
  font-size: 16px;
  color: #3366cc;
`;

export const AuthBanner = styled.div`
  flex: 1;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage});`};
  background-size: cover;
  background-repeat: no-repeat;
`;
