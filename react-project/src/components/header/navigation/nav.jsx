import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
  return (
    <nav>
      <WrappNav>
        <li>
          <TitleHomeNav to="/">Home</TitleHomeNav>
        </li>
        <li>
          <TitleTeacherNav to="/teachers">Teachers</TitleTeacherNav>
              </li>
              
            
      </WrappNav>
    </nav>
  );
};

export default Navigation;
