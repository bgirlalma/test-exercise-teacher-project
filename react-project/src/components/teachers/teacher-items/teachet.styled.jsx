import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const WrappContainer = styled.div`
`;

export const TeacherList = styled.li`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 48px;
  padding: 24px;
  background-color: #fff;
  border-radius: 24px;
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DescLanguage = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #8a8a89;
`;

export const MainTitle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  color: #121417;
  margin-bottom: 32px;
`;

export const StyledDescInfo = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #8a8a89;
  margin-bottom: 8px;
`;

export const ReadMoreContainer = styled.div`
  margin-top: 8px;
  margin-bottom: 32px;
`;

export const ReadMore = styled(NavLink)`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #121417;
  text-decoration: underline;
`;

export const ButtonElement = styled.button`
  padding: 0 12px 0 12px;
  height: 32px;
  border-radius: 35px;
  border: 1px solid #8a8a89;
  background-color: inherit;
  margin-right: 8px;

  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #121417;

  &:last-child {
    margin-right: 0;
  }
`;

export const ButtonWrapp = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoadMoreButton = styled.button`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #121417;

  width: 183px;
  height: 60px;
  border: none;
  border-radius: 12px;
  background-color: #f4c550;
  margin-top: 64px;
`;
