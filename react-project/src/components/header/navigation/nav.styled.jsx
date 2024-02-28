import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const WrappNav = styled.ul`
  display: flex;
  align-items: center;
`;

export const TitleHomeNav = styled(NavLink)`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #121417;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #6699cc;
  }
`;

export const TitleTeacherNav = styled(NavLink)`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #121417;
  margin-left: 28px;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #6699cc;
  }
`;

export const TitleFavoriteNav = styled(NavLink)`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #121417;
  margin-left: 28px;

  transition: 0.3s ease-in-out;

  &:hover {
    color: #6699cc;
  }
`;