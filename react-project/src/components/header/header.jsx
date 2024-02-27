import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/userHook";
import UserMenu from "../useMenu/userMenu";
import UserNavButton from "./button/userNavButton";
import Logo from "./logo";
import Navigation from "./navigation/nav";
import styled from "styled-components";
import { logoutUser } from "../../redux/user-autorization/authOperation";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 128px;
  margin-right: 128px;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const Header = () => {
    const dispatch = useDispatch();

    const handleLogout = async () => {
        console.log('Выход из учетной записи');
        dispatch(logoutUser());
      };
    const {isLoggIn} = useAuth()
    return (
      <HeaderContainer>
        <Logo />
        <Navigation />
       {isLoggIn ?  <UserNavButton /> :  <UserMenu logout={handleLogout} />}
      
      </HeaderContainer>
    );
}

export default Header;