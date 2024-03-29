import styled from "styled-components";

export const ContainerReadMore = styled.div`
position: relative;
`;

export const ReadMoreDesc = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #121417;
  margin-top: 16px;
`;

export const ReadMoreName = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #8a8a89;
  margin-top: 32px;
`;

export const ReadMoreratingContainer = styled.div`
  display: flex;
`;

export const ReadMoreStar = styled.div`
margin-right: 8px;
`;

export const ReadMorerating = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #121417;
`;

export const ReadMoreComment = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #121417;
  margin-top: 16px;
`;

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 32px;
  column-gap: 8px;
  gap: 10px;
`;

export const ListLevels = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(18, 20, 23, 0.2);
  border-radius: 35px;
  padding: 0 12px;
  height: 32px;

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

export const PositionButton = styled.div`
  margin-top: 32px;
`;

export const BookTrialLessonButton = styled.button`
  border-radius: 12px;
  padding: 16px 48px;
  height: 60px;
  background-color: #9fbaae;
  border: none;
  cursor: pointer;

  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  color: #121417;
  transition: 0.5s ease-in-out;

  &:hover,
  &:focus {
    background-color: #cbded3;
  }
`;