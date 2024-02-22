import { NavLink } from "react-router-dom";
import { LoginSvg } from "../../image/login";
import styled from "styled-components";

const WrappNavButton = styled.div`
  display: flex;
  align-items: center;
`;

const LogInButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: inherit;
`;

const TitleButton = styled(NavLink)`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #121417;
  margin-left: 8px;
`;

const RegistrationNavButton = styled.button`
  width: 166px;
  height: 48px;
  border: none;
  border-radius: 12px;
  background-color: #121417;
  margin-left: 16px;
`;

const TitleRegButton = styled(NavLink)`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #fff;
`;
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
