import { LoginSvg } from "../../image/login";
import { WrappNavButton, LogInButton, TitleButton, RegistrationNavButton, TitleRegButton  } from "./userNavButton.styled";

const UserNavButton = () => {
  return (
    <WrappNavButton>
      <LogInButton>
        <LoginSvg />
        <TitleButton to="/login">Log in</TitleButton>
      </LogInButton>
      <RegistrationNavButton>
        <TitleRegButton to="/register">Registration</TitleRegButton>
      </RegistrationNavButton>
    </WrappNavButton>
  );
};

export default UserNavButton;
