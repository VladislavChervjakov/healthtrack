import { useState } from "react";
import Button, { BUTTON_TYPES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    resetFormFields();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="SignInContainer">
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Psssword"
          type="password"
          required
          onChange={handleChange}
          value={password}
        />
        <Button buttonType={BUTTON_TYPES.base} type="submit">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;
