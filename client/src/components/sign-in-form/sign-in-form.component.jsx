import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../store/user/user.actions";
import {
  selectIsSuccess,
  selectUserError,
} from "../../store/user/user.selector";
import {
  FormContainer,
  AuthHeading,
  AuthLink,
} from "../auth-styles/auth-styles";
import Button, { BUTTON_TYPES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const success = useSelector(selectIsSuccess);
  const error = useSelector(selectUserError);

  useEffect(() => {
    if (success) {
      console.log(success);
      resetFormFields();
      navigate("/dashboard");
    } else if (error) {
      alert(error);
    }
  }, [navigate, success, error]);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(loginUser(formFields));

    resetFormFields();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <FormContainer>
      <AuthHeading>
        <h1>Sign in</h1>
        <span>
          Doesn`t have an account?{" "}
          <AuthLink to="/sign-up">Create new account</AuthLink>
        </span>
      </AuthHeading>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Psssword"
          type="password"
          name="password"
          required
          onChange={handleChange}
          value={password}
        />
        <Button fullWidth={true} buttonType={BUTTON_TYPES.base} type="submit">
          Sign In
        </Button>
      </form>
    </FormContainer>
  );
};

export default SignInForm;
