import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import {
  AuthPageContainer,
  AuthBanner,
} from "../../components/auth-styles/auth-styles";
import signInBanner from "../../assets/sign-in-banner.jpg";

const SignIn = () => {
  return (
    <AuthPageContainer>
      <SignInForm />
      <AuthBanner backgroundImage={signInBanner} />
    </AuthPageContainer>
  );
};

export default SignIn;
