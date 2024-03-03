import styled from "styled-components";

export const WrappContainer = styled.div``;

export const PositionImage = styled.div`
position: relative;
`;

export const SvgContainer = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  margin-top: 21px;
  margin-right: 16px;
  padding: 4px;
  background-color: #fff;
  border-radius: 100%;
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
  width: 96px;
  height: 96px;
  padding: 12px;
  border-radius: 50%;
  border: 3px solid #fbe9ba;
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
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #121417;
  margin-bottom: 8px;
`;

export const ReadMoreContainer = styled.button`
  margin-top: 8px;
  margin-bottom: 32px;
  background-color: inherit;
  border: none;
`;

export const ReadMore = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #121417;

  text-decoration: underline;
  cursor: pointer;

  background-color: inherit;
  border: none;

  transition: 0.5s ease-in-out;

  &:hover {
    color: #9fbaae;
  }
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

export const StyledList = styled.ul`
display: flex;
align-items: center;
margin-top: 32px;
`;

export const ListLevels = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(18, 20, 23, 0.2);
  border-radius: 35px;
  padding: 0 12px;
  height: 32px;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }

  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 114%;
  color: #121417;
  cursor: pointer;

  transition: 0.5s ease-in-out;

  &:hover,
  &:focus {
    background-color: #9fbaae;
  }
`;
