import {
  BaseButton,
  InvertButton,
  CancelButton,
  SubmitButton,
} from "./button.styles";

export const BUTTON_TYPES = {
  base: "base",
  invert: "invert",
  cancel: "cancel",
  submit: "submit",
};

const getButton = (buttonType = BUTTON_TYPES.base) =>
  ({
    [BUTTON_TYPES.base]: BaseButton,
    [BUTTON_TYPES.invert]: InvertButton,
    [BUTTON_TYPES.cancel]: CancelButton,
    [BUTTON_TYPES.submit]: SubmitButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
