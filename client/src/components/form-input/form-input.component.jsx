import { FormInputLabel, Group, Input } from "./form-input.styles";

const FormInput = ({ label, otherProps }) => {
  <Group>
    <Input {...otherProps} />
    {label && (
      <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
    )}
  </Group>;
};

export default FormInput;
