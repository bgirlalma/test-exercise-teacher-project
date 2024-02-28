import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const WrappNavButton = styled.div`
  display: flex;
  align-items: center;
`;

export const LogInButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: inherit;
`;

export const TitleButton = styled(NavLink)`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #121417;
  margin-left: 8px;

  transition: 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #6699cc;
  }
`;

export const TitleRegButton = styled(NavLink)`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #fff;
`;

export const RegistrationNavButton = styled.button`
  width: 166px;
  height: 48px;
  border: none;
  border-radius: 12px;
  background-color: #121417;
  margin-left: 16px;

  transition: 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #6699cc;

    ${TitleRegButton} {
      color: #121417;
    }
  }
`;
