
import styled from 'styled-components';

export const Container = styled.div`
position: absolute;
z-index: 2;
`;


export const BookTrialLessonContainer = styled.div`
  position: relative;
  max-width: 600px;
  padding: 64px;
  border-radius: 30px;
  background-color: #f8f8f8;
  box-sizing: border-box;
`;

export const IconCloseWrappContainer = styled.button`
position: absolute;
top: 0;
right: 0;
margin: 20px 20px 12px 0;

cursor: pointer;
background-color: inherit;
border: none;
`;

export const BookTrialLessonTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #121417;
  margin: 0 0 20px 0;
`;

export const BookTrialLessonDesc = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 137%;
  color: rgba(18, 20, 23, 0.8);
  margin: 0 0 20px 0;
`;

export const TeachetInfo = styled.ul`
  margin: 0 0 40px 0;
`;

export const TeacherInfoList = styled.li`
  display: flex;
  align-items: center;
`;

export const ModalImage = styled.img`
border-radius: 50%;
margin-right: 14px;
`;

export const TeacherListDesc = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 133%;
  color: #8a8a89;
  margin-bottom: 4px;
`;

export const TeacherListTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #121417;
`;

export const TitleRadio = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 133%;
  color: #121417;
  margin: 0 0 20px 0;
`;
