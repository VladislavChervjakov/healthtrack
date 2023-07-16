import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  AuthPageContainer,
  AuthBanner,
} from "../../components/auth-styles/auth-styles";
import signUpBanner from "../../assets/sign-up-banner.jpg";

const SignUp = () => {
  return (
    <AuthPageContainer>
      <SignUpForm />
      <AuthBanner backgroundImage={signUpBanner} />
    </AuthPageContainer>
  );
};

export default SignUp;
