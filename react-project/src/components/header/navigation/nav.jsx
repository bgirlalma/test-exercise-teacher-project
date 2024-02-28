import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../../hooks/userHook";
import UserLogIn from "../../modal/login/login";

const WrappNav = styled.ul`
  display: flex;
  align-items: center;
`;

const TitleHomeNav = styled(NavLink)`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #121417;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #6699cc;
  }
`;

const TitleTeacherNav = styled(NavLink)`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #121417;
  margin-left: 28px;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #6699cc;
  }
`;

const TitleFavoriteNav = styled(NavLink)`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #121417;
  margin-left: 28px;

  transition: 0.3s ease-in-out;

  &:hover {
    color:#6699cc;
  }
`;
const Navigation = () => {
  const {isLoggIn} = useAuth()

  return (
    <nav>
      <WrappNav>
        <li>
          <TitleHomeNav to="/">Home</TitleHomeNav>
        </li>      
          <li>
            <TitleTeacherNav to="/teachers">Teachers</TitleTeacherNav>
        </li>   
        {isLoggIn ? <li><TitleFavoriteNav to="/favorite">Favorite</TitleFavoriteNav></li> : <UserLogIn/>}
      </WrappNav>
    </nav>
  );
};

export default Navigation;
