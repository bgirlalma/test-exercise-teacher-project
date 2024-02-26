import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../../hooks/userHook";
import { useEffect, useState } from "react";

const WrappNav = styled.ul`
  display: flex;
  align-items: center;
`;

const TitleHomeNav = styled(NavLink)`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #121417;
`;

const TitleTeacherNav = styled(NavLink)`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #121417;
  margin-left: 28px;
`;
const Navigation = () => {
  const { isLoggIn } = useAuth()
  const [isLoggedIn, setIsLoggedIn] = useState(isLoggIn);
  
  useEffect(() => {
setIsLoggedIn(isLoggIn)
  }, [isLoggIn])
  return (
    <nav>
      <WrappNav>
        <li>
          <TitleHomeNav to="/">Home</TitleHomeNav>
        </li>
        {isLoggedIn && (
          <li>
            <TitleTeacherNav to="/teachers">Teachers</TitleTeacherNav>
          </li>
        )}
      </WrappNav>
    </nav>
  );
};

export default Navigation;
