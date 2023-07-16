import { useState } from "react";
import {
  FormContainer,
  AuthHeading,
  AuthLink,
} from "../auth-styles/auth-styles";
import Button, { BUTTON_TYPES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  userName: "",
  email: "",
  password: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { userName, email, password } = formFields;

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
    <FormContainer>
      <AuthHeading>
        <h1>Sign Up</h1>
        <span>
          Already have an account? <AuthLink to="/sign-in">Sign in</AuthLink>
        </span>
      </AuthHeading>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          required
          onChange={handleChange}
          value={userName}
        />
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
        <Button fullWidth={true} buttonType={BUTTON_TYPES.base} type="submit">
          Sign Up
        </Button>
      </form>
    </FormContainer>
  );
};

export default SignUpForm;
