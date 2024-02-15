import UserNavButton from "./button/userNavButton";
import Logo from "./logo";
import Navigation from "./navigation/nav";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 64px;
  margin-right: 64px;
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