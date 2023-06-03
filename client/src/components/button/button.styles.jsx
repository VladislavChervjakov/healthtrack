import styled from "styled-components";

const baseColor = "#000";
const textColor = "#fff";
const cancelColor = "#C70000";
const submitColor = "#00FF00";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  line-height: 50px;
  padding: 0 25px;
  background-color: ${baseColor};
  border-radius: 10px;
  color: ${textColor};

  &:hover {
    background-color: ${textColor};
    color: ${baseColor};
    border: 1px solid ${baseColor};
  }
`;

export const InvertButton = styled(BaseButton)`
  background-color: ${textColor};
  color: ${baseColor};
  border: 1px solid ${baseColor};

  &:hover {
    background-color: ${baseColor};
    color: ${textColor};
  }
`;

export const SubmitButton = styled(BaseButton)`
  background-color: ${submitColor};
  color: ${textColor};
`;

export const CancelButton = styled(BaseButton)`
  background-color: ${cancelColor};
  color: ${textColor};
`;
