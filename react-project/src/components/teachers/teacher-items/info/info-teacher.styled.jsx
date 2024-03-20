import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1330px) {
    margin-bottom: 15px;
    justify-content: space-between;
  }
`;

export const Wrapp = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  @media screen and (max-width: 1330px) {
    margin-bottom: 0;
  }

  @media screen and (max-width: 768px) {
   flex-wrap: wrap;
   gap: 10px;
  }
`;

export const IconContainer = styled.div`
  margin-right: 8px;
`;

export const RatingWrapp = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 32px;
  height: 14px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: -16px;
    width: 2px;
    background-color: #121417;
  }

  @media screen and (max-width: 830px) {
    margin-right: 22px;
    height: 11px;

    &::after {
      right: -11px;
      width: 1px;
    }
  }

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-top: 40px;
    &::after {
      content: none;
    }
  }
`;

export const LessonsWrapp = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 32px;
  height: 14px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: -16px;
    width: 2px;
    background-color: #121417;
  }

  @media screen and (max-width: 830px) {
    margin-right: 22px;
    height: 11px;

    &::after {
      right: -11px;
      width: 1px;
    }
  }

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-top: 40px;
    &::after {
      content: none;
    }
  }
`;

export const LessonsDoneWrapp = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 32px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: -16px;
    width: 1px;
    background-color: #121417;
  }

  @media screen and (max-width: 830px) {
    margin-right: 22px;

    &::after {
      right: -11px;
    }
  }

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-top: 40px;
    &::after {
      content: none;
    }
  }
`;

export const Title = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #121417;


  @media screen and (max-width: 1200px) {
    font-size: 14px;
  }

  @media screen and (max-width: 970px) {
    font-size: 12px;
  }

  @media screen and (max-width: 830px) {
    font-size: 10px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const HeartContainer = styled.button`
  margin-left: 64px;
  border: none;
  background-color: inherit;
  cursor: pointer;
  padding: 0;

  @media screen and (max-width: 1330px) {
    margin-left: 10px;
  }
`;

export const HeartYellowContainer = styled.button`
  margin-left: 64px;
  border: none;
  background-color: inherit;
  cursor: pointer;
  padding: 0;

  @media screen and (max-width: 1330px) {
    margin-left: 10px;
  }
`;