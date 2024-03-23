import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const WrappLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledNavlink = styled(NavLink)`
  display: flex;
  align-items: center;
`;

export const TitleLogo = styled.h2`
  margin-left: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: #121417;

  @media screen and (max-width: 676px) {
    font-size: 16px;
  }
`;