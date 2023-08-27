import { useState } from "react";
import {
  FormContainer,
  AuthHeading,
  AuthLink,
} from "../auth-styles/auth-styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button, { BUTTON_TYPES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import {
  selectCurrentUser,
  selectIsSuccess,
  selectUserError,
  selectUserIsLoading,
} from "../../store/user/user.selector";
import { useEffect } from "react";
import { registerUser } from "../../store/user/user.actions";
import Error from "../error/error.component";

const defaultFormFields = {
  userName: "",
  email: "",
  password: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { userName, email, password } = formFields;

  const loading = useSelector(selectUserIsLoading);
  const error = useSelector(selectUserError);
  const success = useSelector(selectIsSuccess);
  const currentUser = useSelector(selectCurrentUser);

  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      navigate("/sign-in");
    } else if (currentUser) {
      navigate("/dashboard");
    }
  }, [navigate, success, currentUser]);

  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(registerUser(formFields));

    resetFormFields();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <FormContainer>
      {error && <p>{error}</p>}
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
          name="userName"
          required
          onChange={handleChange}
          value={userName}
        />
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
        <Button
          fullWidth={true}
          buttonType={BUTTON_TYPES.base}
          disabled={loading}
          type="submit"
        >
          Sign Up
        </Button>
        {error ? <Error errorText={error} /> : ""}
      </form>
    </FormContainer>
  );
};

export default SignUpForm;
