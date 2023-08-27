import { ErrorWrapper, ErrorText } from "./error.styles";

const Error = ({ errorText }) => {
  return (
    <ErrorWrapper>
      <ErrorText>{errorText}</ErrorText>
    </ErrorWrapper>
  );
};

export default Error;
