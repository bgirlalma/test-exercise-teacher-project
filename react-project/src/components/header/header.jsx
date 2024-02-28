import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/userHook";
import UserMenu from "../useMenu/userMenu";
import UserNavButton from "./button/userNavButton";
import Logo from "./logo";
import Navigation from "./navigation/nav";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 128px;
  margin-right: 128px;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const Header = () => {

    const {isLoggIn} = useAuth()
    return (
      <HeaderContainer>
        <Logo />
        <Navigation />
        {isLoggIn ? <UserNavButton /> : <UserMenu />}
      </HeaderContainer>
    );
}

export default Header;