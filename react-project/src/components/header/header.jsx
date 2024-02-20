import UserNavButton from "./button/userNavButton";
import Logo from "./logo";
import Navigation from "./navigation/nav";
import styled from "styled-components";

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
    return (
        <HeaderContainer>
            <Logo />
            <Navigation />
            <UserNavButton/>
        </HeaderContainer>
    )
}

export default Header;