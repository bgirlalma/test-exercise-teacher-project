import styled from 'styled-components';
import { NavLink} from 'react-router-dom';

export const WrappNav = styled.ul`
  display: flex;
  align-items: center;
`;

const activeclassname = 'active';

export const TitleHomeNav = styled(NavLink).attrs({ activeclassname })`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #121417;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #6699cc;
  }

  &.${activeclassname} {
    color: #6699cc;
  }

  @media screen and (max-width: 676px) {
    font-size: 14px;
  }
`;

export const TitleTeacherNav = styled(NavLink).attrs({ activeclassname })`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #121417;
  margin-left: 28px;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #6699cc;
  }

  &.${activeclassname} {
    color: #6699cc;
  }

  @media screen and (max-width: 900px) {
    margin-left: 18px;
  }

  @media screen and (max-width: 676px) {
    margin-left: 12px;
    font-size: 14px;
  }
`;

export const TitleFavoriteNav = styled(NavLink).attrs({ activeclassname })`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #121417;
  margin-left: 28px;

  transition: 0.3s ease-in-out;

  &:hover {
    color: #6699cc;
  }

  &.${activeclassname} {
    color: #6699cc;
  }

  @media screen and (max-width: 900px) {
    margin-left: 18px;
  }

  @media screen and (max-width: 676px) {
    margin-left: 12px;
    font-size: 14px;
  }
`;
